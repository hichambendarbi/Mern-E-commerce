const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    admin: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String
    },
    role: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    createdat: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String
    }
})

module.exports = User = mongoose.model('user',UserSchema)