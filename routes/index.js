const router = require("express").Router();
var QRCode = require('qrcode');


router.get("/", (req, res)=>{
        QRCode.toDataURL("Hari Shah")
    .then(url => {
        res.render("index.ejs", {url})
    })
    .catch(err => {
      console.error(err)
    })
});


module.exports = router;