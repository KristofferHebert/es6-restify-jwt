'use strict'

import express from 'express'

// Import Models
import User from './model/user'

let router = express.Router()

function routes(server, restify){

    restify.serve(router, User)
    server.use(router)

}

export default routes
