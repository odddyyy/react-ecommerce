require('dotenv').config()
const cors = require('cors')
const express = require('express')
const server = express()
const PORT = process.env.PORT || 3001
const route = require('./routes')
const errorHandler = require('./middlewares/errorhandler')

server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended:false }))

server.use('/', route)
server.use(errorHandler)



server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))