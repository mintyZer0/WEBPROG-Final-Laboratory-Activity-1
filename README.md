# Movie API Activity

## Objectives

By the end of this activity, you should be able to:

- Set up an Express server and run it on a port
- Use the `express.json()` middleware to read data from the request body
- Store and manage data using an in-memory array of objects
- Implement the five CRUD operations using the correct HTTP methods
- Use JavaScript array methods (`find`, `findIndex`, `push`, `splice`) inside routes
- Return proper responses and status codes
- Test each route and document the results with screenshots

## Topics Covered

- Express server setup (`require("express")`, create `app`, `app.listen`)
- JSON middleware using `express.json()`
- In-memory data store (array of objects, no database)
- Root route using `app.get("/")` and `res.send`
- GET all records using `res.json`
- GET one record by id using a route parameter, `req.params`, and `find()`
- POST a new record using `req.body`, auto id, `push()`, and status `201`
- PUT to update a record by id
- DELETE a record by id using `findIndex()` and `splice()`
- Responses and status codes (`res.json`, `res.send`, `res.status`)

## The Movie Entity

Use this starting array as your data. You may change the titles, but keep the same shape with an `id` and a `title`.

```js
let movies = [
  { id: 1, title: "Movie title sample 1" },
  { id: 2, title: " Movie title sample 2" }
];
```

## What You Will Build

Create one file named `movieapi.js` and implement the following routes.

| # | Task | Description |
|---|------|-------------|
| 1 | Server setup | Import express, create the app, and add `app.use(express.json())` so the server can read the request body |
| 2 | Root route | `app.get("/")` that responds with a welcome message such as `Welcome to the Movie API` |
| 3 | GET all movies | `app.get("/movies")` that returns the whole `movies` array as JSON |
| 4 | GET one movie by id | `app.get("/movies/:id")` that uses `req.params.id` and `find()` to return a single movie |
| 5 | POST a new movie | `app.post("/movies")` that reads `req.body.title`, creates a new movie with an auto-generated id, pushes it into the array, and responds with status `201` and the new movie |
| 6 | PUT update a movie | `app.put("/movies/:id")` that finds the movie by id and updates its title from `req.body.title` |
| 7 | DELETE a movie | `app.delete("/movies/:id")` that finds the movie by id using `findIndex()` and removes it using `splice()` |
| 8 | Run the server | `app.listen` on port `3000` and log a message to the console |

## Testing Your API

Test every route before submitting.

- Use the **browser** for the GET routes (the root, GET all movies, and GET one movie by id)
- Use **Postman** or the **Thunder Client** extension in VS Code for POST, PUT, and DELETE, since these send data in the request body
- For POST and PUT, send the title in the request body as JSON, for example:

```json
{ "title": "Heneral Luna" }
```

## How to Submit

Submit a screenshot for **each** route to prove it works. To confirm the work is your own, every screenshot must include an open Notepad window that contains your full name, section, and the date. If the Notepad with your name is missing from a screenshot, that screenshot will not be counted.

### Required Screenshots

1. Server running in the terminal (showing the port 3000 is running message)
2. Root route result in the browser
3. GET all movies result in the browser
4. GET one movie by id result in the browser
5. POST a new movie result in Postman or Thunder Client (showing status `201`)
6. PUT update a movie result
7. DELETE a movie result

### Notepad Rule for Every Screenshot

Open Notepad and type the following, then keep it visible in the same screen capture as your result.

```
Name - <your full name>
Section - <your section>
Date - <today's date>
```

### What to Pass

- Your `movieapi.js` file
- One document (Word or PDF) containing all the screenshots in order, each with the Notepad visible

Place your code file and the screenshot document inside one folder, rename the folder as `Surname_Firstname_MovieAPI`, then compress it into a zip file before uploading.

## Grading Rubric

| Criteria | Points |
|----------|-------:|
| Server setup and `express.json()` middleware working | 10 |
| Root route returns a welcome message | 5 |
| GET all movies returns the full array | 10 |
| GET one movie by id works correctly | 15 |
| POST adds a new movie with auto id and 201 status | 15 |
| PUT updates a movie by id | 15 |
| DELETE removes a movie by id | 15 |
| Screenshots complete, each with Notepad showing the name | 10 |
| Code is clean, runs without errors, uses the movie entity | 5 |
| **Total** | **100** |
