var nodemailer = require('nodemailer');
var fs = require('fs');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'knight3001@gmail.com',
        pass: 'MhGXMHPqRCSLlQhU6Q5Y'
    }
});

var mailOptions = {
    from: 'knight3001@gmail.com',
    to: 'terry@bneing.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});