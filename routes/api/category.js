const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator');
const Category = require('../../models/Category');
const User = require('../../models/Category')




//----------------->  @route     POST api/category
//----------------->  @desc      Add new category
//----------------->  @access    Private
router.post('/', [
    auth,
    [
        check('categoryName', 'Category nom est un chanp obligatoire').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ error: errors.array() });
    }
    const user = User.findById(req.user.id)

    try {
        const {
            categoryName
        } = req.body;
    
        const newCategory = {}

        newCategory.categoryName= categoryName;
        newCategory.createdBy= req.user.id;

        const category = new Category(newCategory)
        await category.save()
        res.json(category)
    } catch (err) {
        console.error(err.message);
        res.status(400).send('Server Error')
    }
} )

//----------------->  @route     GET api/category
//----------------->  @desc      get all gategory
//----------------->  @access    Private
router.get('/', auth , async (req, res) => {
    try {
     const categorys = await Category.find();
     if(!categorys) {
        return res.status(400).json({msg: 'Aucune categorie existe'});
     }
     res.json(categorys)
    } catch (err) {
        console.error(err.message);
        res.status(400).send('Server Error')
    }
} )

module.exports = router; 