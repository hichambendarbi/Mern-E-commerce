const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')
const Cart = require('../../models/Cart');
const User  = require('../../models/User');

//----------------->  @route     POST api/cart
//----------------->  @desc      Add new cart
//----------------->  @access    Private and cach coquies
router.post('/', auth , async (req, res) => {
    try { 
        const {
            idProduct,
            productBrand,
            productName,
            quantity,
            productPrice,
            amount,
            quantityCart,
            sizeName,
            idSize,
            imgProduct
        } = req.body;
        
        const newCart = {}
        newCart.idProduct= idProduct;
        newCart.productBrand= productBrand;
        newCart.productName= productName;
        newCart.quantity= quantity;
        newCart.productPrice= productPrice;
        newCart.amount= amount;
        newCart.quantityCart= quantityCart;        
        newCart.sizeName= sizeName;
        newCart.idSize= idSize;
        newCart.imgProduct= imgProduct;
        newCart.costumerId= req.user.id;
        const cart = new Cart(newCart)
        await cart.save()
        res.json(cart)
        
    } catch (err) {
        console.error(err.message);
        res.status(400).send('Server Error')
    }
} )

//----------------->  @route     GET api/cart
//----------------->  @desc      All product in cart
//----------------->  @access    Private and cach coquies
router.get('/', auth, async (req, res) => {
    var allCart = []
    try {
        const cart = await Cart.find()
        for(var i=0; i<cart.length; i++){
            if(cart[i].costumerId==req.user.id){
                allCart.push(cart[i])
            }  
        }
    
        if(!cart) {
            return res.status(400).json({ msg: 'Panier vide'})
        }
        if(!allCart){
            return res.status(400).json({msg: 'Votre panier est encore vide'})
        }
        res.json(allCart) 
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }
})

//----------------->  @route     POST api/cart/:id
//----------------->  @desc      Update cart
//----------------->  @access    Private and Cockies and localStorage
router.post('/:id',auth, async(req, res)=> {
            // Check Product if authorased for adding product 
            const user = await User.findById(req.user.id).select('-password');
            if(!user.admin) {
                return res.status(400).json({msg: 'User noN autoriser'});
            }

    const {
        idProduct,
        productBrand,
        productName,
        quantity,
        productPrice,
        amount,
        quantityCart,        
        sizeName,
        idSize,
        imgProduct
    } = req.body;
    // Build profile object
    const updateCart = {}
    updateCart.idProduct= idProduct;
    updateCart.productBrand= productBrand;
    updateCart.productName= productName;
    updateCart.quantity= quantity;
    updateCart.productPrice= productPrice;
    updateCart.amount= amount;
    updateCart.quantityCart= quantityCart;        
    updateCart.sizeName= sizeName;
    updateCart.idSize= idSize;
    updateCart.imgProduct= imgProduct;
    updateCart.costumerId= req.user.id;
    
    try {
        let cart = await Cart.findById(req.params.id)
        if(cart) { 
            // update product
            cart = await Cart.findOneAndUpdate(
                {_id: req.params.id},
                {$set: updateCart}, 
                {overwrite: true}
            ) 
        }
       return res.json(cart);
    } catch (err) { 
        console.error(err.message);
        res.sendStatus(500).send('Server error')
    }
})

module.exports = router;