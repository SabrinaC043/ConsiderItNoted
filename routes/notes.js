

const router = require("express").Router();
const path = require("path");
const { randomUUID } = require("crypto");
const { readFromFile, writeToFile, readAndAppend } = require("../helpers/fsUtils");
// notes if it doesn't work

router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", (req, res) => {

    // destructuring assignnment for the items in req.body
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: randomUUID(),
        };
        readAndAppend(newNote, "./db/db.json");
        res.json(`${req.body}`);
    } else {
        res.json("Error in adding Note");
    }
    // readAndAppend(newNote, "./db/db.json");
    // res.json("Note information added");

});



module.exports = router;
