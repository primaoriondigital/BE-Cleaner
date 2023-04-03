const express = require('express')
const router = express.Router()
const UsersRouter = require('../routes/user')
const OrderRouter = require('../routes/order')
const PhotoRouter = require('../routes/photo')

router
.use('/users',UsersRouter)
.use('/order',OrderRouter)
.use('/photo',PhotoRouter)

module.exports = router
