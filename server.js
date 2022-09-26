const express = require("express");
const html = require("./routes/hmtlroutes");
const api = require("./routes/apiroutes");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', html);
app.use('/api', api);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} `)
});