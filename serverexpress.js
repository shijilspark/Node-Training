const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT|| 3000;

var app = express ();

// hbs.registerPartails(__dirname + '/views/partials')
hbs.registerPartials(__dirname + '/views/partials');
app.set('view.engine','hbs');

app.use(express.static(__dirname + '/views'))
//below is a middleware and the rest of the code will be fired only after
//the following code is executed and next() command


// app.use((req, res) =>{
//   res.render('maintenance.hbs')
// });

app.use((req, res, next) =>{
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log',log + `\n`, (err) =>{
    if (err){
      console.log('Unable to append to server.log')
    }
  });

  next();
});



hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
})

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',

    });
});

app.get('/about',(req,res) =>{
  // res.send('About Page');
  res.render('about.hbs',{
    pageTitle:'About Page',

  });

});

app.get('/bad',(req,res) => {
  res.send({
    errorMessage:'Unable to handle request'
  });
});


app.listen(port, ()=>{
  console.log(`Server is running on ${port}`);
});
