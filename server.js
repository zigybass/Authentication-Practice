const express = require("express");
const app = express();
const axios = require("axios");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

axios.post('/api', {
    headers: {
        "Content-Type": "application/json"
    }
}, (req, res) => {
    console.log("test server").then( (response) => {
        res.json({
            message: "Hello from server"
        })
    }
    ).catch(function(err) {
        res.status(500).json({
          error: err.message
        });
      });
});

app.listen(PORT, console.log("Server live at PORT" + PORT));