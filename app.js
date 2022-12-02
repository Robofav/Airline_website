let express = require ("express")
let path = require ("path")
let hbs=require ('hbs');
let app = express()

let bodyParser = require("body-parser");
let mongoose = require("mongoose");

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
+
app.set("views",path.join(__dirname, "/template/views"))
app.set("view engine","hbs")
hbs.registerPartials(path.join(__dirname, "/template/partials"))

app.use(express.static (path.join(__dirname, "public")))

let schema = new mongoose.Schema({
    "cardholder name" : {
        type: String,
        required: true
    },
    "card number" : {
        type: String,
        required: true
    },
    "card type" : {
        type: String,
        required: true
    },
    "expiry" : {
        type: Date,
        required: true
    },
    "cvv" : {
        type: Number,
        required: true
    }
});

let CC = new mongoose.model("CC", schema);

app.get("/", (req,res)=>{
    res.render('home1')
})

app.get("/signup", (req,res)=>{
    res.sendFile (path.join(__dirname, "signup.html"))
})

app.get("/bookform", (req,res)=>{
    res.render ('bookform')
})

app.get("/booksearch", (req,res)=>{
    res.render ('booksearch')
})

app.get("/faqs", (req,res)=>{
    res.render ('faqs')
})

app.get("/payment", (req,res)=>{
    res.render ('payment')
})

app.get("/technical", (req,res)=>{
    res.render ('technical')
})

app.get("/services", (req,res)=>{
    res.render ('services')
})

app.get("/aboutus", (req,res)=>{
    res.render ('aboutus')
})

app.get("/team",(req,res)=>{
    res.render ('team')
})

app.get("/contact", (req,res)=>{
    res.sendFile (path.join(__dirname, "contactus.html"))
})


app.post("/post", (req, res) => {
    let cc = new CC(req.body);
    cc.save();
    console.log(req.body);
    console.log("Data saved");
})

app.listen("3000", ()=>{console.log('connected...')
// console.log(path.join(__dirname, "public"))
})

let connectdb= require("./connectdb.js");
connectdb()