const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/API-routes")(app);

app.listen(PORT, console.log("Server live at PORT" + PORT));