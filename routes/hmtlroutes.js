const router = require("express").Router();
const { randomUUID } = require("crypto");
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");
const path = require("path");
const { write } = require("fs");


router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})
// wildcard is asterisk for express
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get("/api", (req, res) => {
    readFromFile("./db/db.json").then((data) =>
        res.json(JSON.parse(data)))

});


router.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    writeToFile(destination, newNote)
    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: randomUUID(),
        };

        readAndAppend(newNote, "./db/db.json");
        res.json(`Note input successful ${req.method} received`);

    } else {
        res.error("Error in adding Note");

    }
});

module.exports = router;
