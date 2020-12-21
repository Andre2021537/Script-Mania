var fs = require("fs");

// var readMe = fs.readFileSync("readMe.txt", "utf-8");
//
// console.log(readMe);
//
// fs.writeFileSync("writeMe.txt", readMe);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require("path")

//Set up PUG view engine
app.set('views', path.join(__dirname, '/../'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/../')));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/example', (req, res) => {
  console.log("hey");
});

const port = 3001;

app.listen(port, () => {
  console.log("Server running on port 3001");
});

app.get('/', function(request, response) {
  response.status(200).render("html/load", {});
});
