const router = require("express").Router();
const { randomUUID } = require("crypto");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const path = require("path");


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
    console.log(req.body);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: randomUUID(),
        };
        readAndAppend(newNote, "./db/db.json")
        res.json("Successfully Added")
    } else {
        res.error("Error in adding note");
    }
});

module.exports = router;