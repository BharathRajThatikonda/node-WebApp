const express = require('express');
const hbs = require('hbs');
var app = express();
 var port = process.env.PORT || 3001
// Node Middleware
hbs.registerPartials(__dirname + '/views/partial');
app.set("view engine","hbs");

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    return res.render('about.hbs', {
        pageTitle: 'Welcome to the World of Bharath Raj Thatikonda',
        subTitle: 'Bharath Thatikonda an Foolish Fellow',
        currentYear: new Date().getFullYear()
      });});

app.get('/hello',(req,res)=>{
    return res.send("gfge")
 });

 app.get('/about',(req,res)=>{
    return res.render('about.hbs', {
        pageTitle: 'About Page',
        subTitle: 'Bharath Raj Thatikonda',
        currentYear: new Date().getFullYear()
      });
 });

app.listen(port,()=>{
    console.log(`start on port ${port}`);
});