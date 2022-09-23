const express = require("express");
const path = require('path');
// const db= require("db/db.json");
const fs = require("fs");
const util = require("util");
const app = express();

const PORT = 3001;
// helper for unique id creation 
const uuid = require('./helpers/uuid');



// serves all from public directory -static middleware
app.use(express.static("public"));
// parsing JSON and url encoded form data 
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(path.join(_dirname, "/public")));

app.get("/notes", (req, res) => res.sendFile(path.join(_dirname, "public/notes.html")));

app.get("/api/notes", (req, res) => res.sendFile(path.join(_dirname, "db/db.json")));
// let user know response was received 
app.post("/api/notes", (req, res) => {
    res.json(`${req.method} request received`)
})








// listening to requests from CLI 
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)

});
