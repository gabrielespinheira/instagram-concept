const express = require('express')
const path = require('path')
const cors = require('cors')
const db = require('./config/db')

const app = express()

const server = require('http').Server(app)
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
server.listen(3333)
