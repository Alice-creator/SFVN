const http = require('http')
const app = require('./app')
path = require('path')
require('dotenv').config({path:path.join(__dirname, '..', '..', '/config.env')})
const port = process.env.USER_PORT
const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`User Service run at port ${port}`)
})