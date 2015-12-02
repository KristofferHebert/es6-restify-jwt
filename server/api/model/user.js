'use strict'

//http://stackoverflow.com/questions/14588032/mongoose-password-hashing

import db from '../../config/db.js'
import bcrypt from 'bcrypt'

let Schema = db.Schema

let UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    }
})

// hash password on creation
UserSchema.pre('save', function(next){
    var user = this

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next()

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err)

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err)

            // override the cleartext password with the hashed one
            user.password = hash
            next()
        })
    })
})

let User = db.model("User", UserSchema)

export default User
