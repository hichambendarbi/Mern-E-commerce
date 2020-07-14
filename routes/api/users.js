const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const User = require('../../models/User')
const config = require('config')
const jwtSecret = config.get('jwtSecret')

//  @route    POST api/users
//  @desc     Register user
//  @access   Public
router.post('/', [
    check('cname','Nom et Prenom sont obligatoire').not().isEmpty(),
    check('email','Utiliser un email valide').isEmail(),
    check('password','Mot de passe accepte au minimum 6 caracteres').isLength({min: 6})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
    }

    const {cname, email, password} = req.body;

    try {
        let user =  await User.findOne({email})
        if(user) {
           return res.status(400).json({ errors: [ {msg: 'Utilisateur existe deja'}]})
        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        user = new User({
            cname, email, avatar, password
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        // res.send('Utilisateur  enregistre  avec success')

        const payload = {
            user: {
                id: user._id
            }
        }

        jwt.sign(payload, jwtSecret, {expiresIn: 36000}, (err, token)=> {
             if(err) throw err;
             res.json({token});
        })

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }

})

module.exports = router;