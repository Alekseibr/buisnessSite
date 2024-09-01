
const express = require('express')
const path = require('path')
const host = 'localhost';
const port = process.env.PORT || 3000
const clientPath = path.join(__dirname, 'pages')
const assets = path.join(__dirname, 'assets')
const app = express()


app.use(express.static(clientPath))
app.use('/assets', express.static(assets))


// app.get('/', (req, res) => {
//   res.send('Hello 111!')
// })

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)

module.exports = app