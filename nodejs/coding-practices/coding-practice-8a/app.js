const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

const app = express();

app.use(express.json());

const databasePath = path.join(__dirname, "todoApplication.db");

let database = null;

const initializeDBAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });
<<<<<<< HEAD
    app.listen(3000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (e) {
    console.log(`DataBase Error: ${e.error}`);
=======
    createTodoTable();
    app.listen(3000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`DataBase Error ${error.error}`);
>>>>>>> ed52e5efdb1fec01b8f23304c837a9a73d573356
    process.exit(1);
  }
};

initializeDBAndServer();

<<<<<<< HEAD
// const createtodo = async () => {
//   const createTableQuery = `CREATE TABLE IF NOT EXISTS todo(
//     id INTEGER,
//     todo TEXT,
//     priority TEXT,
//     status TEXT);`;
//   await database.run(createTableQuery);
//   console.log("Database Created");
// };
=======
const createTodoTable = async () => {
  const createTableQuery = `CREATE TABLE IF NOT EXISTS TodoTable(
    id INTEGER,
    todo TEXT,
    priority TEXT,
    status TEXT);`;
  await database.run(createTableQuery);
  console.log("Database Created");
};
>>>>>>> ed52e5efdb1fec01b8f23304c837a9a73d573356

//API 1: GET based on Scenario's
app.get("/todos/", async (request, response) => {
  const { status, priority, search_q } = request.query;

  let API1Query = `
  SELECT *
<<<<<<< HEAD
  FROM todo
=======
  FROM TodoTable
>>>>>>> ed52e5efdb1fec01b8f23304c837a9a73d573356
  WHERE 1 = 1 `;

  switch (true) {
    case status !== undefined && priority !== undefined:
<<<<<<< HEAD
      API1Query += `AND priority = '${priority}' AND status = '${status}' `;
      break;
    case priority !== undefined:
      API1Query += `AND priority = '${priority}' `;
      break;
    case status !== undefined:
      API1Query += `AND status = '${status}' `;
      break;
    case search_q !== undefined:
      API1Query += `AND todo LIKE '%${search_q}%' `;
=======
      API1Query += `AND priority = '${priority}' AND status = '${status}'`;
      break;
    case priority !== undefined:
      API1Query += `AND priority = '${priority}'`;
      break;
    case status !== undefined:
      API1Query += `AND status = '${status}'`;
      break;
    case search_q !== undefined:
      API1Query += `AND search_q = '${search_q}'`;
>>>>>>> ed52e5efdb1fec01b8f23304c837a9a73d573356
      break;
  }

  const API1Result = await database.all(API1Query);
  response.send(API1Result);
});

//API 2: return specific todo based on ID
app.get("/todos/:todoId/", async (request, response) => {
  const { todoId } = request.params;
  const getTodoByIdQuery = `
    SELECT *
<<<<<<< HEAD
    FROM todo
=======
    FROM TodoTable
>>>>>>> ed52e5efdb1fec01b8f23304c837a9a73d573356
    WHERE id = ${todoId}`;

  const getTodoByIdResult = await database.get(getTodoByIdQuery);
  response.send(getTodoByIdResult);
});

//API 3: Create Todo in the todo table
app.post("/todos/", async (request, response) => {
  const { id, todo, priority, status } = request.body;
  const addTodoQuery = `
<<<<<<< HEAD
    INSERT INTO todo ( id, todo, priority, status )
=======
    INSERT INTO TodoTable ( id, todo, priority, status )
>>>>>>> ed52e5efdb1fec01b8f23304c837a9a73d573356
    VALUES ( ${id}, '${todo}', '${priority}', '${status}')`;
  await database.run(addTodoQuery);
  response.send("Todo Successfully Added");
});

//API 4: updates todo based on todo Id
app.put("/todos/:todoId/", async (request, response) => {
  const { todoId } = request.params;
<<<<<<< HEAD
  let updateColumn = "";
  const requestBody = request.body;

  switch (true) {
    case requestBody.status !== undefined:
      updateColumn = "Status";
      break;
    case requestBody.priority !== undefined:
      updateColumn = "Priority";
      break;
    case requestBody.todo !== undefined:
      updateColumn = "Todo";
      break;
  }
  const previousTodoQuery = `SELECT * FROM todo WHERE id = ${todoId}`;
  const previousTodo = await database.get(previousTodoQuery);

  const {
    todo = previousTodo.todo,
    priority = previousTodo.priority,
    status = previousTodo.status,
  } = request.body;

  const updateTodoQuery = `UPDATE todo SET todo='${todo}', priority='${priority}', status='${status}' WHERE id = ${todoId}`;
  database.run(updateTodoQuery);
  response.send(`${updateColumn} Updated`);
=======
  const { status, priority, todo } = request.body;

  let resp = "";
  let updateTodoQuery = `
  UPDATE TodoTable
  SET `;

  switch (true) {
    case status !== undefined:
      updateTodoQuery += `status='${status}'`;
      resp += "Status Updated";
      break;
    case priority !== undefined:
      updateTodoQuery += `priority='${priority}'`;
      resp += "Priority Updated";
      break;
    case todo !== undefined:
      updateTodoQuery += `todo='${todo}'`;
      resp += "Todo Updated";
      break;
  }
  updateTodoQuery += `WHERE id = ${todoId}`;

  await database.run(updateTodoQuery);
  response.send(resp);
>>>>>>> ed52e5efdb1fec01b8f23304c837a9a73d573356
});

//API 5: delete todo based on todo Id
app.delete("/todos/:todoId/", async (request, response) => {
  const { todoId } = request.params;

<<<<<<< HEAD
  const deleteTodoQuery = `DELETE FROM todo WHERE id = ${todoId}`;
=======
  const deleteTodoQuery = `DELETE FROM TodoTable WHERE id = ${todoId}`;
>>>>>>> ed52e5efdb1fec01b8f23304c837a9a73d573356
  await database.run(deleteTodoQuery);
  response.send("Todo Deleted");
});

module.exports = app;
