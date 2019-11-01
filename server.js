const express = require("express");

const PORT = process.env.PORT || 5000;

require("./routes/API-routes")

const app = express();

app.listen(PORT, console.log("Server live at PORT" + PORT));