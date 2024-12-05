const express = require("express")
const port = 3000
app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})
