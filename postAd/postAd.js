const express = require("express");
const passport = require("passport");
const bodyParser = require('body-parser');

const app = express();


app.post('/api/newUser', function(req, res) {
    res.send(req.body);
  });

