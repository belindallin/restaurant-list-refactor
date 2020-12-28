const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant.js')
const handlebars = require('handlebars')

handlebars.registerHelper('ifEquals', function (sortName, selectedSort, options) {
    return (sortName === selectedSort)? options.fn(this) : options.inverse(this)
})

router.get('/', (req, res) => {
  const sortMethod = req.query.sort
  Restaurant.find()
  .lean()
  .sort(sortMethod)
  .then(restaurants => {
    res.render('index', {restaurants, sortMethod}) 
  }) 
  .catch(error => console.log(error))    
})

module.exports = router