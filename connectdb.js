let
mongoose = require
('mongoose')

let
URI = "mongodb+srv://ritikdata123:Qag27924@cluster0.7f9h3oc.mongodb.net/?retryWrites=true&w=majority"

let
connectdb = async()=>{

try{
let
con = await mongoose.connect(URI,{useUnifiedTopology :true, useNewUrlParser: true}
)
console.log("database is connected with the given URI ")
}
catch(err){
console.log(err)
}
}
module.exports = connectdb

