const express = require('express');
const router = express.Router();
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Product = require('../../models/Product');
const Category = require('../../models/Category');


//----------------->  @route     POST api/products/:category_id
//----------------->  @desc      Create New Product
//----------------->  @access    Private

router.post('/:category_id',[
    auth
    ,
    [
        check('reference', 'Le reference est un chanp obligatoire').not().isEmpty(),
        check('productName', 'LE nom de produit est un chanp obligatoire').not().isEmpty(),
        check('priceB', 'Le prix achat est un chanp obligatoire').not().isEmpty(),
        check('priceS', 'Le prix de vente est un chanp obligatoire').not().isEmpty(),
        check('quantity', 'La quantite est un chanp obligatoire').not().isEmpty(),
        check('etat', 'Etat est un chanp obligatoire').not().isEmpty(),
        check('brand', "La marque est un chanp obligatoire").not().isEmpty()
        // check('imagePath', 'Image est obligatoire').not().isEmpty(),
    ]
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    try {
        // Check Product if authorased for adding product 
        const user = await User.findById(req.user.id).select('-password');
        if(!user.admin) {
            return res.status(400).json({msg: 'User no autoriser'});
        }

    const category = Category.findById(req.params.category_id)
        // Build Object Product 
        const {
            reference,
            productName,
            priceB,
            priceS,
            quantity,
            brand,
            discount,
            old,
            etat,
            categoryName
        } = req.body
        const productFields = {};
        productFields.createdBy= req.user.id;
        productFields.userName= user.cname;
        productFields.reference= reference;
        productFields.productName= productName;
        productFields.priceB= priceB;
        productFields.priceS= priceS;
        productFields.quantity= quantity;
        productFields.categoryName= categoryName;
        productFields.discount= discount;
        productFields.old= old; 
        productFields.brand= brand;
        productFields.etat= etat;
        productFields.productCategoryID= req.params.category_id;
        const product = new Product(productFields)
        await product.save();
        res.json(product)
      
    } catch (err) {
        console.error(err.message);
        res.status(400).send('Server Error')
    }
})

//----------------->  @route     POST api/products/color/:id
//----------------->  @desc      Add new color in product
//----------------->  @access    Private
router.put('/color/:id', [
    auth,
    [
        check('colorName', 'La coleur est un chanp obligatoire').not().isEmpty(),
        check('quantityColor', 'La quantite du coleur est un chanp obligatoire').not().isEmpty(),
        check('priceColor', 'Le prix du coleur est un chanp obligatoire').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ error: errors.array() });
    }

    const {
        colorName,
        quantityColor,
        priceColor
    } = req.body;

    const newColor = {
        colorName,
        quantityColor,
        priceColor
    }

    try {
        const product = await Product.findById(req.params.id);
        product.color.unshift(newColor);
        await product.save();
        res.json(product);
    } catch(err) {
        console.error(err.message);
        res.status(400).send('Server Error')
    }
} )

//----------------->  @route     POST api/products/remove/color/:id:color_id
//----------------->  @desc      Remove color from product
//----------------->  @access    Private
router.delete('/remove/color/:id/:color_id', auth, async (req, res) => {
        // See if product exist
        const product = await Product.findById(req.params.id); 
        if(!product) {
            return res.status(400).json({ msg: 'Produit introuvable'})
        }
        try {
        // Get Color Index
        const colorIndex = product.color.map( color => color.id.toString().indexOf(req.params.color_id))
        
        product.color.splice(colorIndex, 1)

        await product.save();
        res.json(product)
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
})

//----------------->  @route     POST api/products/update/color/:id/:color_id
//----------------->  @desc      Update color from product
//----------------->  @access    Private
router.post('/update/color/:id/:color_id', auth, async (req, res) => {
    // See if product exist
    const product = await Product.findById(req.params.id); 
    if(!product) {
        return res.status(400).json({ msg: 'Produit introuvable'})
    }

    const colorIndex = product.color.find( color => color.id===req.params.color_id)
    {!req.body.colorName ? colorIndex.colorName=colorIndex.colorName : colorIndex.colorName = req.body.colorName}
    {!req.body.quantityColor ? colorIndex.quantityColor=colorIndex.quantityColor : colorIndex.quantityColor = req.body.quantityColor}
    {!req.body.priceColor ? colorIndex.priceColor=colorIndex.priceColor : colorIndex.priceColor = req.body.priceColor}
    product.save();
    res.json(product)

})

//----------------->  @route     GET api/products
//----------------->  @desc      Get all product
//----------------->  @access    Private
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        if(!products) {
            return res.status(400).json({ msg: 'Aucun produit existe'})
        }
        res.json(products)
    } catch (err) {
        console.err(err.message)
        res.status(500).send('Server Error');
    }
})

//----------------->  @route     GET api/products/:id
//----------------->  @desc      Get product by ID 
//----------------->  @access    Private
router.get('/:id', auth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) {
            return res.status(400).json({ msg: 'Produit introuvable'})
        }
        res.json(product) 
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }
})

//----------------->  @route     POST api/products/color/:id
//----------------->  @desc      Add new color in product
//----------------->  @access    Private
router.put('/size/:id', [
    auth,
    [
        check('sizename', 'Lebele est un chanp obligatoire').not().isEmpty(),
        check('unite', 'Unite est un chanp obligatoire').not().isEmpty(),
        check('quantitySize', 'Quantite est un chanp obligatoire').not().isEmpty(),
        check('priceSize', 'Prix est un chanp obligatoire').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ error: errors.array() });
    }

    const {
         sizename,
         unite,
         quantitySize,
         priceSize
    } = req.body;

    const newSize = {
        sizename,
         unite,
         quantitySize,
         priceSize
    }

    try {
        const product = await Product.findById(req.params.id);
        product.size.unshift(newSize);
        await product.save();
        res.json(product);
    } catch(err) {
        console.error(err.message);
        res.status(400).send('Server Error')
    }
} )


//----------------->  @route     POST api/products/:id
//----------------->  @desc      Update Product
//----------------->  @access    Private
router.post('/:category_id/:id',auth, [
    check('reference', 'Le reference est un chanp obligatoire').not().isEmpty(),
    check('productName', 'LE nom de produit est un chanp obligatoire').not().isEmpty(),
    check('priceB', 'Le prix achat est un chanp obligatoire').not().isEmpty(),
    check('priceS', 'Le prix de vente est un chanp obligatoire').not().isEmpty(),
    check('quantity', 'La quantite est un chanp obligatoire').not().isEmpty(),
    check('etat', 'Etat est un chanp obligatoire').not().isEmpty(),
    check('brand', 'La marque est un chanp obligatoire').not().isEmpty(),
], async(req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
            // Check Product if authorased for adding product 
            const user = await User.findById(req.user.id).select('-password');
            if(!user.admin) {
                return res.status(400).json({msg: 'User no autoriser'});
            }
            const category = await Category.findById(req.params.category_id)

    const {
        reference,
        productName,
        priceB,
        priceS,
        quantity,
        etat,
        brand,
        categoryName,
        old,
        discount
    } = req.body;
    // Build profile object
    const productFields = {};
    productFields.createdBy= req.user.id;
    productFields.userName= user.cname;
    productFields.reference= reference;
    productFields.productName= productName;
    productFields.priceB= priceB;
    productFields.priceS= priceS;
    productFields.quantity= quantity;
    productFields.categoryName= categoryName;
    productFields.etat= etat;
    productFields.brand= brand;
    productFields.discount= discount;
    productFields.old= old; 
    productFields.productCategoryID= req.params.category_id;
    

    try {
        let product = await Product.findById(req.params.id)
        if(product) { 
            // update product
            product = await Product.findOneAndUpdate(
                {_id: req.params.id},
                {$set: productFields},
                {overwrite: true}
            )
        }
       return res.json(product);
    } catch (err) {
        console.error(err.message);
        res.send(500).send('Server error')
    }
})


//----------------->  @route     POST api/products/color/:id
//----------------->  @desc      Add new color in product
//----------------->  @access    Private
const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.put('/image/:id',upload.single('productImg'), async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ error: errors.array() });
    }
    // const url = req.protocol + '://' + `192.168.43.182:3000`
    const url = req.protocol + '://' + `10.1.1.63:3000`
    // req.get('host')
    const productImg = url + '/public/' + req.file.filename; 

    const {
        colorr,
        quantityColor,
        priceColor
   } = req.body;

    const newImage = {
        productImg,
        colorr,
        quantityColor,
        priceColor
    }
    console.log(newImage)
    try {  
        const product = await Product.findById(req.params.id);
        product.image.unshift(newImage);
        await product.save();
        res.json(product);
    } catch(err) {
        console.error(err.message);
        res.status(400).send('Server Error') 
    }
} )

//----------------->  @route     DELETE api/products/:id
//----------------->  @desc      Remove product
//----------------->  @access    Private Admin
router.delete('/:id', async(req, res)=> {
    // Find Product by ID
    let product = await Product.findById(req.params.id);
    if(!product){
        res.json('Produit introuvabl')
    }
    await product.remove();
    res.json({ msg: 'Produit supprimer avec suucces' });
})


module.exports = router;


