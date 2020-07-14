const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

    reference:{
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    priceB: {
        type: Number,
        required: true
    },
    priceS: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    etat: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    size: [
       {
        sizename: {
            type: String,
         },
         unite: {
             type: String,
         }, 
         quantitySize: {
             type: Number,
         },
         priceSize: {
            type: Number,
         }
    }
    ],
    old: {
        type: String
    },
    discount: {
        type: String
    },
    color: [
        {
          colorName:{
              type: String
          },
          quantityColor: {
              type: Number,
      },
          priceColor: {
             type: Number,
      }
     }
     ],
     image: [
           {
            productImg: {
                type: String
            },
            colorr:{
                type: String
            },
            quantityColor: {
                type: Number,
            },
            priceColor: {
                type: Number,
            }
           } 
     ],
     feedback: [
         {
            createdBy: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            userName: {
                type: String
            },
            stars: {
                type: Number
            }
         }
     ],
     comment: [
        {
            createdBy: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            userName: {
                type: String
            },
            text: {
                type: String
            }
         }
     ],
    productCategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    categoryName: {
        type: String
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    userName: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = Product = mongoose.model('product',ProductSchema)