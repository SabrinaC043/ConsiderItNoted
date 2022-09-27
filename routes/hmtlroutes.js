const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/index.html'))
})

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/notes.html'))
})

module.exports = router;
