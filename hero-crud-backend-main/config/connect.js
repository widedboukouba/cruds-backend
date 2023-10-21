// 1
const mongoose = require('mongoose');
// 2
mongoose.connect("mongodb+srv://widedboukouba64:wided12345@cluster0.yejy8un.mongodb.net/?retryWrites=true&w=majority" )
    .then(
        ()=>{
            console.log('connected to db !');
        }
    )
    .catch(
        ()=>{
            console.log('error in connection');
        }
    )

// 3
module.exports = mongoose;