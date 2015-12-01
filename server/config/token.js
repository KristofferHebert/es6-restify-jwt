import jwt from 'restify-jwt'
import LOCALS from './config/locals'

const TOKEN = jwt({secret: LOCALS.secret})

console.log(TOKEN)

export default TOKEN
