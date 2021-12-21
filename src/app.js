const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 5000
const hbs = require("hbs")

const static_path = path.join(__dirname,"../public");
const partialPath = path.join(__dirname,"../templates/partials")

hbs.registerPartials(partialPath)
app.set("views", path.join(__dirname, "../templates/views"))
app.set('view engine', "hbs")
app.use(express.static(static_path))

app.get("",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404error", {
        errorMsg : "OOPS ! page not found"
    })
})

app.listen(port,()=>{
    console.log(`port ${port}`);
})