const mongoose = require('mongoose');


const Hero = mongoose.model( 'Hero' , {

   
    image: String,
     
    id: String,
    name: String,
    client: String,
    adress: String,
    date: Date,
    statut: String,
    prix:  Number,


} );

module.exports = Hero;