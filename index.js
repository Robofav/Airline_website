let express = require("express")
let path = require("path")
let hbs = require("hbs")


let app = express()

app.set("view engine", "hbs")

// by default, all hbs files should be in 'views' folder and this folder is a subfolder
// of root folder
// but here veiws folder is not a subfolder of root directory , it is
// stored in templates folder
// so we need to write following statement

app.set("views",path.join(__dirname, "../template/views"))
hbs.registerPartials(path.join(__dirname, "../template/partials"))

// above statement is not needed if you are using ejs


app.get("/", (req,res)=>{
    res.render("home", {"username":"karan"})
})

app.listen("3000", ()=>{
    console.log('connected to server...')
    console.log(__dirname)
})