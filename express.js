const express = require('express')
const path =require('path')
const app = express()
const port = 3000

//app.use(express.static(path.join(__dirname,"static")))
app.get('/hello', (req, res) => {
 //res.send('Hello World!')
  //res.sendFile("static/home.html")
})

app.get('/about', (req, res) => {
    res.send('<h1>Hello W</h1>')
  })

  app.get('/contact', (req, res) => {
    res.send('Hello Abhi!')
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})