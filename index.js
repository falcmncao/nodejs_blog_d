const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('Hello World Ahihi Le Tien Dung dm dep trai roi day!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})