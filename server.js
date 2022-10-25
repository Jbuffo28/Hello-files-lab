const Express = require("express")
const app = Express()

const PORT = 5000

app.use(Express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/test-1.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/test-2.html")
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})