require('dotenv').config();
const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  mongoDb = require('./config/db.js'),
  path=require('path');


//database
mongoDb();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));  //bodyparser 
app.use(express.static(__dirname+'/public')); //path for public dir



app.get('/',(req,res)=>{
	res.render('home');
});



app.use('/receipt', require('./router/receipt'));


// error handler
app.use(function(err, req, res, next) {
 
  console.log(err);
  res.redirect('back');
});


PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
