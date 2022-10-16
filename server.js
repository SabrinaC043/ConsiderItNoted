const express = require("express")
const fs = require("fs")
const router = require("express").Router();



const PORT = process.env.PORT || 3001;
const app = express()
const notes = require("./routes/notes")
const html = require("./routes/html")



app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(routes);
app.use('/api', notes)
app.use('/', html)

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} `));