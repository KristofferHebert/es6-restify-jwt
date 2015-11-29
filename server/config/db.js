import mongoose from "mongoose"
import LOCALS from './locals'

let dbName = (LOCALS.port === "production") ? LOCALS.productionDB : LOCALS.stagingDB

let db = mongoose

db.connect('mongodb://localhost/' + dbName)

export default db
