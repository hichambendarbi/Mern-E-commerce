const express = require('express')
const connectDB = require('./config/db')
const apiUsers = require('./routes/api/users')
const apiAuth = require('./routes/api/auth')
const apiProduct = require('./routes/api/product')
const apiCategory = require('./routes/api/category')
const apiproductimg = require('./routes/api/productimg')
const apiemail = require('./routes/api/emailRecouver')
const apicart = require('./routes/api/cart')
const app = express()


// Connecting Our DataBase
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))
app.use('/public', express.static('public'))
            
app.get('/', (req, res)=> res.send('API Running'))
// Our Routes

app.use('/api/users', apiUsers)
app.use('/api/auth', apiAuth)
app.use('/api/product', apiProduct)
app.use('/api/category', apiCategory)
app.use('/api/productimg', apiproductimg)
app.use('/api/emailRecouver', apiemail)
app.use('/api/cart', apicart)


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server Started On PORT ${PORT}`) )

