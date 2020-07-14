const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productImg: {
        type: String
    }
}, {
    collection: 'prod'
})

module.exports = mongoose.model('Prod', prodSchema)