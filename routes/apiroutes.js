const api = require("express").Router();
const { randomUUID } = require("crypto");


api.get("/api", (req, res) => {
    readFromFile("./db/db.json").then((data) =>
        res.json(JSON.parse(data)))

});


api.post("/notes", (req, res) => {
    const { title, text } = req.body;
    writeToFile(destination, newNote)
    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: randomUUID(),
        };

        readAndAppend(newNote, "../public/pages/notes.html");
        res.json(`Note input successful ${req.body} received`);
        res.json(response);
    } else {
        res.error("Error in adding Note");

    }
});

module.exports = api;