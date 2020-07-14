const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({
    idProduct: {
        type: String,
        
    },
    productBrand: {
        type: String,
        
    }, 
    productName: {  
        type: String,
        
    },
    quantity: {
        type: Number,
        
    },
    productPrice: {
        type: Number,
        
    },
    amount: {
        type: String,
         
    },
    quantityCart: {
        type: Number
    },
    imgProduct: {
        type: String
    },
    costumerId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'

    },
    dateAdded : {
        type: Date,
        default: Date.now
    }
   
})

module.exports = Cart = mongoose.model('cart', CartSchema)