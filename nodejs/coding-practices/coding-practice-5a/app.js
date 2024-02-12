const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

databasePath = path.join(__dirname, "moviesData.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDBAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`Initialization Error ${e.error}`);
    process.exit(1);
  }
};

initializeDBAndServer();

// Convert

const ConvertDBObjectToResponseObject = (dbObject) => {
  return {
    movieId: dbObject.movie_id,
    directorId: dbObject.director_id,
    movieName: dbObject.movie_name,
    leadActor: dbObject.lead_actor,
  };
};

// API 1: list of all movies

app.get("/movies/", async (request, response) => {
  const sqlQueryForAPI1 = `
            SELECT movie_name
            FROM movie
        `;
  const sqlResultForAPI1 = await database.all(sqlQueryForAPI1);
  response.send(
    sqlResultForAPI1.map((eachMovieObject) =>
      ConvertDBObjectToResponseObject(eachMovieObject)
    )
  );
});

// API 2: post movie

app.post("/movies/", async (request, response) => {
  const { directorId, movieName, leadActor } = request.body;
  const sqlQueryForAPI2 = `
            INSERT INTO 
                movie (director_id, movie_name, lead_actor)
            VALUES
                ('${directorId}', '${movieName}', '${leadActor}');
    `;
  const movie = await database.run(sqlQueryForAPI2);
  response.send("Movie Successfully Added");
});

// API 3: gets movie based on id

app.get("movies/:movieId", async (request, response) => {
  const { movieId } = request.params;
  console.log(movieId);
  const sqlQueryForAPI3 = `
            SELECT *
            FROM movie
            WHERE movie_id = ${movieId};`;
  const movie = await database.get(sqlQueryForAPI3);
  console.log(movie);
  response.send(movie);
});
