const router = require("express").Router();
const path = require("path");


router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/notes.html'))
})
// wildcard is asterisk for express
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/index.html'))
})

module.exports = router;
