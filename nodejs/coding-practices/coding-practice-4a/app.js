const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const dbPath = path.join(__dirname, "cricketTeam.db");
const app = express();

app.use(express.json());
let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    console.log("Database Connected");
    app.listen(3000, () =>
      console.log("Server Started at http://localhost:3000/")
    );
  } catch (e) {
    response.send(`DB Error ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

const convertDBObjectToResponseObject = (Player) => {
  return {
    playerId: Player.player_id,
    playerName: Player.player_name,
    jerseyNumber: Player.jersey_number,
    role: Player.role,
  };
};

// Get Players API
app.get("/players/", async (request, response) => {
  getAllPlayersQuery = `
        SELECT * FROM cricket_team;
    `;
  const queryResult = await db.all(getAllPlayersQuery);

  const modifiedResult = queryResult.map((eachPlayer) => {
    return convertDBObjectToResponseObject(eachPlayer);
  });

  response.send(modifiedResult);
});

// Get player API
app.get("/players/:playerId", async (request, response) => {
  const { playerId } = request.params;

  getPlayerQuery = `SELECT * FROM cricket_team WHERE player_id = ${playerId}`;

  const queryResult = await db.all(getPlayerQuery);

  console.log(convertDBObjectToResponseObject(queryResult[0]));
  response.send(convertDBObjectToResponseObject(queryResult[0]));
});

// Add Player API
app.post("/players/", async (request, response) => {
  const playerDetails = request.body;
  const { playerName, jerseyNumber, role } = playerDetails;
  const addPlayerQuery = `
    INSERT INTO
        cricket_team ( player_name, jersey_number, role )
    VALUES
        ('${playerName}',${jerseyNumber},'${role}');`;
  const dbResponse = await db.run(addPlayerQuery);
  response.send("Player Added to Team");
});

// Update player API
app.put("/players/:playerId", async (request, response) => {
  try {
    const { playerId } = request.params;
    const playerDetails = request.body;
    const { playerName, jerseyNumber, role } = playerDetails;
    const updatePlayerQuery = `
                    UPDATE 
                        cricket_team
                    SET
                        player_name = '${playerName}',
                        jersey_number = ${jerseyNumber},
                        role = '${role}'
                    WHERE 
                        player_id = ${playerId};
                    `;
    await db.run(updatePlayerQuery);
    response.send("Player Details Updated");
  } catch (e) {
    response.send(`Node Error ${e.message}`);
  }
});

// Delete player API
app.delete("/players/:playerId", async (request, response) => {
  const { playerId } = request.params;
  const deletePlayerQuery = `DELETE FROM cricket_team
                            WHERE player_id = ${playerId};`;
  await db.run(deletePlayerQuery);
  response.send("Player Removed");
});

module.exports = app;
