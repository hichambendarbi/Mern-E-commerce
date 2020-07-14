const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const express = require('express');
const router = express.Router();
const config = require('config');
const nodemailer = require('nodemailer');

/*** Calling this function with a registered user's email sends an email IRL ***/
/*** I think Nodemail has a free service specifically designed for mocking ***/
let transporter = nodemailer.createTransport({
service: "gmail",
type: 'oauth2',
port: 25,
secure: false,
requireTLS: true,
auth: {
user: "bendarbiApp@gmail.com",
pass: 'YOUR PASS EMAIL'
}, tls: {
rejectUnauthorized: false
}
})

const getPasswordResetURL = (user, token) =>
`http://localhost:3000/password/${user._id}/${token}`

const resetPasswordTemplate = (user, url) => {
const from = "bendarbiApp@gmail.com"
const to = user.email
const subject = "3DSTORE Recupuration mot de passe"
const html = `
<p>Salut ${user.email},</p>
<p>Nous sommes heureux de vous envoyez ce email pour vous aidez !</p>
<p>Ne paniquer pas votre mot de passe sera recuperer facilement cliquez sur le lien:</p>
<a href=${url}>${url}</a>
<p>Le lien ca va expirer apres une heure</p>
<p>Bon journee</p>
<p>Assistance technique 3DSTORE</p>
`

return { from, to, subject, html }
}

router.post('/:email', async (req, res) => {
const { email } = req.params
let user
try {
user = await User.findOne({ email }).exec()
} catch (err) {
res.status(404).json("No user with that email")
}
// const token = usePasswordHashToMakeToken(user)

const payload = {
user : {
id : user.id
}
}

const token = jwt.sign(payload, config.get('jwtSecret'), {
expiresIn: 3600 // 1 hour
})

const url = getPasswordResetURL(user, token)
const emailTemplate = resetPasswordTemplate(user, url)

transporter.sendMail(emailTemplate)
.then(function (email) {
res.status(200).json({ success: true, msg: 'Mail sent' });
}).catch(function (exception) {
res.status(200).json({ success: false, msg: exception });
});
})

router.post('/:userId/:token', (req, res) => {
const { userId, token } = req.params
const { password } = req.body
User.findOne({ _id: userId })
.then(user => {
console.log(user)
const secret = user.password + "-" + user.createdAt
const payload = jwt.decode(token, config.get('jwtSecret'))
console.log(payload)
if (payload.user.id === user.id) {
bcrypt.genSalt(10, function(err, salt) {
if (err) return
bcrypt.hash(password, salt, function(err, hash) {
if (err) return
User.findOneAndUpdate({ _id: userId }, { password: hash })
.then(() => res.status(202).json("Password changed accepted"))
.catch(err => res.status(500).json(err))
})
})
}
})

.catch(() => {
res.status(404).json("Invalid user")
})
})

module.exports = router;