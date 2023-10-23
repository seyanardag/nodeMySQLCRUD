const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const connection = require("./connection");
const config = require("./config");


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/",routes);


app.listen(config.port, ()=>{
    console.log(`listening on port ${config.port}`);
})
