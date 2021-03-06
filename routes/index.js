const express = require('express')
const router = express.Router()

const home = require('./modules/home.js')
const restaurant = require('./modules/restaurant.js')
const sort = require('./modules/sort')
router.use('/' ,home)
router.use('/restaurants' ,restaurant)
router.use('/sort' ,sort)

module.exports = router