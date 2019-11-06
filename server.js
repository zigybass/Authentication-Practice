const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({
        message: "hello from server"
    });
});

app.listen(PORT, console.log("Server live at PORT" + PORT));