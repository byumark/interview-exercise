const express = require('express')
const cors = require('cors')
const { arabicToRoman } = require('./convert')

const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
