
const router = require("express").Router();
const path = require("path");



router.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/notes.html"))

);

router.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
);

router.get("/api/notes", (req, res) => res.sendFile(path.join(_dirname, "db/db.json")));



module.exports = router;
