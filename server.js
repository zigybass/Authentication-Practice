const express = require("express");
const app = express();
const axios = require("axios");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const router = express.Router();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

router.get('/test', function (req, res, next)  {
    console.log("server console")
}).then( function(response) {
    res.json({
        message: "Server Hello"
    })
})

app.listen(PORT, console.log("Server live at PORT" + PORT));