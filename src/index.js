const express = require('express')

const app = express()
const PORT = 5000

app.listen(PORT,() => {
    console.log(`Running On http://127.0.0.1:${PORT}`)
})
