const routes = (app) => {

app.get("/user/splash", (req, res) => {
    res.json("Hello")
})

}

module.exports = routes;