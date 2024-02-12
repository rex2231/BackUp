const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();

const databasePath = path.join(__dirname, "userData.db");

app.use(express.json());

let database = null;

const initializeDBAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () => console.log("http://localhost:3000/"));
  } catch (e) {
    console.log(`Database Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

//API 1: register

app.post("/register", async (request, response) => {
  const { username, name, password, gender, location } = request.body;
  const getUser = await database.get(
    `SELECT * FROM user WHERE username = '${username}'`
  );
  if (getUser !== undefined) {
    response.status(400);
    response.send("User already exists");
  } else {
    if (password.length < 5) {
      response.status(400);
      response.send("Password is too short");
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const postUserQuery = `INSERT INTO user (username, name, password, gender, location)
        VALUES ( '${username}', '${name}', '${hashedPassword}', '${gender}', '${location}')`;
      await database.run(postUserQuery);
      response.send("User created successfully");
    }
  }
});

//API 2: login

app.post("/login", async (request, response) => {
  const { username, password } = request.body;
  const getUser = await database.get(
    `SELECT * FROM user WHERE username = '${username}'`
  );

  if (getUser === undefined) {
    response.status(400);
    response.send("Invalid user");
  } else {
    const checkPassword = await bcrypt.compare(password, getUser.password);
    if (checkPassword == true) {
      response.status(200);
      response.send("Login success!");
    } else {
      response.status(400);
      response.send("Invalid password");
    }
  }
});

//API 3: change password

app.put("/change-password", async (request, response) => {
  const { username, oldPassword, newPassword } = request.body;
  const getUser = await database.get(
    `SELECT * FROM user WHERE username = '${username}'`
  );

  const checkPassword = await bcrypt.compare(oldPassword, getUser.password);

  if (checkPassword == false) {
    response.status(400);
    response.send("Invalid current password");
  } else {
    if (newPassword.length < 5) {
      response.status(400);
      response.send("Password is too short");
    } else {
      const newHashedPassword = await bcrypt.hash(newPassword, 13);
      const updatePasswordQuery = `UPDATE user SET password = '${newHashedPassword}' WHERE username = '${getUser.username}'`;
      console.log(updatePasswordQuery);
      await database.run(updatePasswordQuery);
      response.status(200);
      response.send("Password updated");
    }
  }
});

module.exports = app;
