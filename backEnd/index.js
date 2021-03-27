const express = require("express");
const path = require("path");
const Port = 3000;

const app = express(); // server?>??

const frontEnd = path.resolve(__dirname, "..", "frontEnd", "dist");

app.use(express.static(frontEnd));

app.listen(Port, () => { // => is function
    console.log(`http://localhost:${Port}`)
})