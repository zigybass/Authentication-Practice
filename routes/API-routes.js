const jwt = require("jsonwebtoken");


module.exports = function (app) {
app.get("/home", (req, res) => {
    res.redirect("/login")
})

app.get("/", (req, res) => {
    res.json({
        message: "Route for API"
    })
})

}
