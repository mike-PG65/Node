const nodemailer = require('nodemailer');

// Replace with your real email and password - DO NOT PUSH THIS TO GITHUB
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password' // use App Password if 2FA is enabled
  }
});

let mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com', // sending to yourself
  subject: 'Node.js Email Test',
  text: 'Hello from Node.js!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
