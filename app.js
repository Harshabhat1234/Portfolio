const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const nodemailer = require('nodemailer');

app.get("/",(req,res)=>{
    res.render('index');
});
app.post("/", (req,res)=>{
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harshabhatportfolio@gmail.com',
      pass: 'cb190045$'
    }
  });
  var mailOptions = {
    from: 'harshabhatportfolio@gmail.com',
    to: 'harshabhatportfolio@gmail.com',
    subject: req.body.subject,
    text: "Name : " + req.body.name   +  " EMAIL : " + req.body.email + " SUBJECT : "+ req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }

  });
  });
app.listen( process.env.PORT || 3000,function()
{
  console.log("server is running");
})