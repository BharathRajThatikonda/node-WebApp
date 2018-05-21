const express = require('express');
const hbs = require('hbs');
var app = express();

// Node Middleware
hbs.registerPartials(__dirname + '/views/partial');
app.set("view engine","hbs");

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    return res.render('about.hbs', {
        pageTitle: 'Welcome to the World of Bharath Thatikonda',
        subTitle: 'Bharath Thatikonda an Foolish Fellow',
        currentYear: new Date().getFullYear()
      });});

app.get('/hello',(req,res)=>{
    return res.send("gfge")
 });

 app.get('/about',(req,res)=>{
    return res.render('about.hbs', {
        pageTitle: 'About Page',
        subTitle: 'Bharath Thatikonda',
        currentYear: new Date().getFullYear()
      });
 });

app.listen(3001,()=>{
    console.log('start on port 3001');
});