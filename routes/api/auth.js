const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route    GET api/auth
// @desc     Test route
// @access   Public

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//  @route   POST api/auth
//  @desc    Authentictae user & get tken
//  @access  Public

router.post('/', [
    check('email', 'email is required').isEmail(),
    check('password', 'Please enter a valid password').exists()
],
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    const {email, password} = req.body;
    try {
   
    let user = await User.findOne({ email });
    if(!user) {
        return res.status(400).json({ errors: [{msg: "Invalid Credentials"}] });
    }

    const ismatch = await bcrypt.compare(password, user.password);

    if(!ismatch) {
        return res.status(400).json({ errors: [{msg: "Invalid Credentials"}] });
    }

    const payload = {
        user : {
            id : user.id
        }
    }

    jwt.sign(
         payload,
         config.get('jwtSecret'), 
         {expiresIn : "1d"},
         (err, token) => {
             if (err) throw err;
             res.json({ token });
         } 
    ) } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
)

module.exports = router;