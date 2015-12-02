'use strict'

// Require modules
import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import restify from 'express-restify-mongoose'
import routes from './api/routes'
import cors from './api/middleware/cors'

// Configuring Server
import LOCALS from './config/locals'
let server = express()
server.use(bodyParser.json())
server.use(methodOverride('X-HTTP-Method-Override'))

// CORS
server.use(cors)

// Configuring Routes
routes(server, restify)

// Launching Server
http.createServer(server).listen(LOCALS.port, function(){
    console.log('Server listening on port:', LOCALS.port)
})

export default server
