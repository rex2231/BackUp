const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const dateFns = require("date-fns");

const databasePath = path.join(__dirname, "todoApplication.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDBAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });
    app.listen(4000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (e) {
    console.log(`Database Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

const isValidDate = (date) => {
  //FormattedDate = dateFns.format(new Date(date), "yyyy-MM-dd");
  const parsedDate = dateFns.parseISO(formattedDate);
  return dateFns.isValid(parsedDate);
};

const invalidScenarios = (request, response, next) => {
  let { status, priority, category, dueDate } = request.body;

  //dueDate = dateTime.format(new Date(dueDate), "yyyy-MM-dd");

  if (["HIGH", "MEDIUM", "LOW", undefined].includes(priority)) {
    if (["TO DO", "IN PROGRESS", "DONE", undefined].includes(status)) {
      if (["WORK", "HOME", "LEARNING", undefined].includes(category)) {
        if (isValidDate(dueDate) || dueDate === undefined) {
          next();
        } else {
          response.status(400);
          response.send("Invalid Due Date");
        }
      } else {
        response.status(400);
        response.send("Invalid Todo Category");
      }
    } else {
      response.status(400);
      response.send("Invalid Todo Status");
    }
  } else {
    response.status(400);
    response.send("Invalid Todo Priority");
  }
};

//API 1: return list of all todo for given status
app.get("/todos", invalidScenarios, async (request, response) => {
  const { status, priority, search_q, category } = request.query;

  let getStatusQuery = `
      SELECT id, todo, priority, status, category, due_date AS dueDate FROM todo WHERE `;
  let queryConditions = [];

  switch (true) {
    case status !== undefined && priority !== undefined:
      queryConditions.push(
        `status = '${status}' AND priority = '${priority}' `
      );
      break;
    case category !== undefined && status !== undefined:
      queryConditions.push(`status = '${status}' AND category = '${category}'`);
      break;
    case category !== undefined && priority !== undefined:
      queryConditions.push(
        ` category = '${category}' AND priority = '${priority}' `
      );
      break;
    case status !== undefined:
      queryConditions.push(`status = '${status}' `);
      break;
    case priority !== undefined:
      queryConditions.push(`priority = '${priority}' `);
      break;
    case search_q !== undefined:
      queryConditions.push(`todo LIKE '%${search_q}%' `);
      break;
    case category !== undefined:
      queryConditions.push(` category = '${category}' `);
      break;
  }
  queryCondition = queryConditions.join();
  const getStatusResult = await database.all(getStatusQuery + queryCondition);
  response.send(getStatusResult);
});

//API 2: return todo based on ID
app.get("/todos/:todoId/", invalidScenarios, async (request, response) => {
  const { todoId } = request.params;
  const todoByIdQuery = `SELECT id, todo, priority, status, category, due_date AS dueDate FROM todo WHERE id = ${todoId}`;
  const todoByIdResult = await database.get(todoByIdQuery);
  response.send(todoByIdResult);
});

//API 3: return specific due date
app.get("/agenda/", invalidScenarios, async (request, response) => {
  let { date } = request.query;
  console.log(date);

  //date = dateFns.format(new Date(date), "yyyy-MM-dd");
  const getAgendaQuery = `SELECT id, todo, priority, status, category, due_date AS dueDate FROM todo WHERE due_date = '${date}'`;
  const getAgendaResult = await database.all(getAgendaQuery);

  response.send(getAgendaResult);
});

//API 4: create a todo in todo table
app.post("/todos/", invalidScenarios, async (request, response) => {
  const { id, todo, priority, status, category, dueDate } = request.body;
  const createTodoQuery = `INSERT INTO todo (id, todo, priority, status, category, due_date) VALUES (${id}, '${todo}', '${priority}', '${status}','${category}', '${dueDate}')`;
  database.run(createTodoQuery);
  response.send("Todo Successfully Added");
});

//API 5: update todo by id
app.put("/todos/:todoId/", invalidScenarios, async (request, response) => {
  const { todoId } = request.params;
  const { todo, priority, status, category, dueDate } = request.body;

  let updateResponse = "";
  let updateQuery = `UPDATE todo SET `;
  switch (true) {
    case todo !== undefined:
      updateQuery += `todo = '${todo}'`;
      updateResponse = "Todo";
      break;
    case priority !== undefined:
      updateQuery += `priority = '${updateQuery}'`;
      updateResponse = "Priority";
      break;
    case status !== undefined:
      updateQuery += `status = '${status}'`;
      updateResponse = "Status";
      break;
    case category !== undefined:
      updateQuery += `category = '${category}'`;
      updateResponse = "Category";
      break;
    case dueDate !== undefined:
      updateQuery += `due_date = '${dueDate}'`;
      updateResponse = "Due Date";
      break;
  }
  updateQuery += ` WHERE id = ${todoId}`;

  database.run(updateQuery);
  response.send(`${updateResponse} Updated`);
});

//API 6: delete todo by id
app.delete("/todos/:todoId/", invalidScenarios, async (request, response) => {
  const { todoId } = request.params;
  const deleteQuery = `DELETE FROM todo WHERE id = '${todoId}'`;
  database.run(deleteQuery);
  response.send("Todo Deleted");
});

module.exports = app;
