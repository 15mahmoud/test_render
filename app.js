const express = require('express')
const app = express()

const PORT = 3000 || process.env.port;


app.get("/", (req, res) => {
    res.send("Hello!")
})

app.listen(PORT, () => {
    console.log("app is running on port " + PORT)
}) 