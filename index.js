const express = require('express')
const app = express()

app.get('/erica',(req, res) => res.send('Hello World'))
app.use(express.static('public'))
app.listen(3000)

