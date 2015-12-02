'use strict'

// Require modules
import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import restify from 'express-restify-mongoose'
import routes from './api/routes'

// Configuring Server
import LOCALS from './config/locals'
let server = express()
server.use(bodyParser.json())
server.use(methodOverride('X-HTTP-Method-Override'))

// CORS
server.use(function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
})

// Configuring Routes
routes(server, restify)

// Launching Server
http.createServer(server).listen(LOCALS.port, function(){
    console.log('Server listening on port:', LOCALS.port)
})

export default server
