const router = require("express").Router();
const sendmail = require("../services/sendmail/mail.js")

router.get("/", (req, res)=>{
    const qrcode = req.header("qrcode")
    const mailaddress = req.header('mailaddress')
    console.log("The received details are " + qrcode, mailaddress);
    sendmail.main(qrcode, mailaddress).catch(console.error);
    res.json("Email sent");
});


module.exports = router;