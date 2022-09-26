const { randomUUID } = require("crypto");
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");
const { write } = require("fs");

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
        res.send(`Note input successful ${req.method} received`);

    } else {
        res.error("Error in adding Note");

    }
});
