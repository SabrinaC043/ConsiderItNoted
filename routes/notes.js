
const express = require("express");
const router = require("express").Router();

const { randomUUID } = require("crypto");
const { readFromFile, writeToFile, readAndAppend } = require("../helpers/fsUtils");


router.get("/notes", (req, res) => {
    readFromFile("../db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", (req, res) => {
    // destructuring assignnment for the items in req.body
    res.json(`${req.method}request accepted`)
    const { title, text } = req.body;
    writeToFile("../db/db.json", newNote)
    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: randomUUID(),
        };

        readAndAppend(newNote, "../db/db.json")
    } else {
        res.json("Error in posting note")
    }
});

module.exports = router;
