let express = require("express")
let path = require("path")
let app = express()
// BY DEAFULT ALL hbs files will be in views folder (which is a subfolder of root directory) so create views folder and store
// template engine files in it
app.set ("view engine", "hbs")

// if you are using ejs , install ejs and change hbs to ejs in the above statement
// what if we change the name of views folder to views1,  write the following statement

app.set("views", path.join(__dirname, "../views"))

// remember above statement is not needed if folder name is 'views'
app.get("/", (req,res)=>{
    res.render("home", {
        "username": "amit"
    })
})
app.listen("3000", ()=>{
    console.log("connected to server....")
    console.log(__dirname)    
    console.log(path.join(__dirname, "../views"))
})
