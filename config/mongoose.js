const mongoose = require ( 'mongoose' )

//set connection with database
mongoose.connect ( 'mongodb://localhost/restaurant_list' , { useNewUrlParser: true , useUnifiedTopology: true } )

const db = mongoose.connection
db.on ( 'error' , () => { console.log ('mongodb error!!!') } )
db.once ( 'open' , () => { 
    console.log ( 'mongoose connected' )
})

module.exports = db