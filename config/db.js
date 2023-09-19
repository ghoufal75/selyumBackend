const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://syler75:gzChwslSaIBpHBVO@cluster0.ygflqbm.mongodb.net/Selyum?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected succesfully to DB");
}).catch(err=>{
    console.log("Error while connecting to DB : ",err)
});
