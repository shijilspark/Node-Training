const nodemailer = require('nodemailer');

const transporter = new nodemailer.createTranspor({

  host: 'smtp-relay.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: '',
    pass: ''
  },
  tls: {
    rejectUnauthrorized: false
  }
});

var mailOptions = {
  from: 'alambanunny@gmail.com',
  to: 'shijil@gmail.com',
  Subject: 'Sending mail using node.js',
  text: 'This is a wonderful mail'

}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    return console.log(error);
  } else {
    console.log("Email has been sent" + info.response);
  }
});
