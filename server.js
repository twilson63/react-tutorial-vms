const app = require('express')()
const jsonServer = require('json-server')

app.use('/api', jsonServer.router('.data/db.json'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/*.js', (req, res) => {
  res.sendFile(__dirname + '/src' + req.url)
})

app.listen(3000)