//load 
const express = require ( 'express' )
const exphbs = require ( 'express-handlebars' )
const restaurantList = require ( './restaurant.json' ).results
const bodyParser = require ( 'body-parser' )
const methodOverride = require ( 'method-override' )
const routes = require ( './routes' )

//Declare related variables for server
const app = express ()
const port = 3000

require ( './config/mongoose.js' )

app.engine ( 'handlebars' , exphbs ({ defaultLayout : 'main' }) )
app.set ( 'view engine' , 'handlebars' )
app.use ( express.static ( 'public' ) )
app.use ( bodyParser.urlencoded ({ extended : true }) )
app.use ( methodOverride ( '_method' ) )
app.use ( routes )

app.get ( '/search' , ( req , res ) => {
    const keyword = req.query.keyword
    const restaurants = restaurantList.filter ( restaurant => restaurant.name.toLowerCase().includes ( keyword.toLowerCase().trim() ) || restaurant.category.toLowerCase().includes ( keyword.toLowerCase().trim() ) )   
    res.render ( 'index', { restaurants: restaurants , keywords :  req.query.keyword } )
  })

//listening server
app.listen ( port , () => {
    console.log ( `Restaurant Web is running on http://localhost:${port}` )
})