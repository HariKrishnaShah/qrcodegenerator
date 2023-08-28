const nodemailer = require("nodemailer");
const fs = require('fs');
const Handlebars = require('handlebars');
const path = require('path');
require('dotenv').config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'hksshah111@gmail.com',
    pass: process.env.password
  }
});
transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


async function main(qrcode, mailaddress) {
  console.log("The main function of mailer has been called");
  const htmlmainfile = fs.readFileSync("./services/sendmail/emailtemplate.handlebars");
  const htmlFile = Buffer.from(htmlmainfile).toString();
  const sample = Handlebars.compile(htmlFile);
  const mail = sample();
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "hksshah111@gmail.com", // sender address
    to: mailaddress, // list of receivers
    subject: "QRCODE", // Subject line
    text: "", // plain text body
    html: mail,
    attachments: [{
      filename: 'image.png',
      path: qrcode,
      cid: 'unique@nodemailer.com' //same cid value as in the html img src
  }]
  });

  console.log("Message sent: %s", info.messageId);
}
module.exports = {main};
// main(userDetails, subject).catch(console.error);