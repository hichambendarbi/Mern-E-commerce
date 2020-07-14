let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

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

// Product model
let Prod = require('../../models/Prod');

router.post('/prod-image', upload.single('productImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const prod = new Prod({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        productImg: url + '/public/' + req.file.filename
    });
    prod.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            userCreated: {
                _id: result._id,
                productImg: result.productImg
            }
        })
    }).catch(err => {
        console.log("ERRROOOOOOOOOR",err),
            res.status(500).json({
                error: err
            });
    })
})

router.get("/", (req, res, next) => { 
    Prod.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            prod: data
        });
    });
});

module.exports = router;