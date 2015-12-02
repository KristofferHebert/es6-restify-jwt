'use strict'
// Import dependencies
import express from 'express'

// Import Middleware
import canEdit from './middleware/canEdit'

// Import Models
import User from './model/user'

let router = express.Router()

// Prevent non owners from accessing

router.use(canEdit)

function routes(server, restify){

    restify.serve(router, User)
    server.use(router)

}

export default routes
