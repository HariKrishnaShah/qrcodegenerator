const router = require("express").Router();
var qr = require("../services/qrCodeGenerator/qrCode")



router.get("/getqr", (req, res)=>{
  console.log("The url code is " + req.header("urlhead"));
  QRCode.toDataURL(req.header('urlhead'))
  .then(ur => {
     res.json(ur);
  })
  .catch(err => {
    console.error(err)
  })
})


module.exports = router;