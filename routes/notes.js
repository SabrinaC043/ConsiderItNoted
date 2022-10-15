
const express = require("express");
const router = require("express").Router();

const { randomUUID } = require("crypto");
const { readFromFile, writeToFile, readAndAppend } = require("../helpers/fsUtils");

router.get("/", (req, res) => {
    readFromFile("../db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/", (req, res) => {
    // destructuring assignnment for the items in req.body
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: randomUUID(),
        };

        writeToFile("../db/db.json", newNote);
        response.json(`${req.body}`);
    } else {
        response.json("Error in adding Note");
    }
    readAndAppend(newNote, "../db/db.json");
    res.json("Note information added");
    const response = {
        status: "success",
        body: newNote,
    };
});

module.exports = router;
