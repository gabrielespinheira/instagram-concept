const express = require('express')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const db = require('./config/db')
require('dotenv').config()

const app = express()
let server

if (process.env.NODE_ENV == 'production') {
  const credentials = {
    key: fs.readFileSync(process.env.HTTPS_KEY),
    cert: fs.readFileSync(process.env.HTTPS_CERT),
  }

  server = require('https').createServer(credentials, app)
} else {
  server = require('http').createServer(app)
}

const io = require('socket.io')(server)

// sockets
app.use((req, res, next) => {
  req.io = io

  next()
})

// habilitar conexão de outros ips
app.use(cors())

// rotas para arquivos estáticos de imagens
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
)

// carregar rotas
app.use(require('./routes'))

// porta
server.listen(process.env.PORT)
