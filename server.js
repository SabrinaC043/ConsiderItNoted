const express = require("express")
const fs = require("fs")
const routes = require("./routes/index");
const PORT = process.env.PORT || 3001;
const app = express();
const notes = require("./routes/notes")
const html = require("./routes/index")



app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use('/api/notes', notes)
app.use('/', html)



app.get('*', (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));


app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} `));