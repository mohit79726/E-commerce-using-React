const express = require('express');
const app = express()

app.set('view engine', "ejs")

app.set('views', "./views");

app.get('/', (req, res) => {

    res.send("hii hello world")
    console.log(req)

})

app.get('/about', (req, res) => {
    res.json({a:"hello"})
})

app.get('/service', (req, res) => {
    let x=[2,6,8]
    res.render("hello",{x: x})
})

app.listen(6262, console.log("server running..."));