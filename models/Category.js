const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    categoryName : {
        type: String,
        required: true
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
   
})

module.exports = Category = mongoose.model('category', CategorySchema)