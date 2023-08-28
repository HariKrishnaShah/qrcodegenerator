const router = require("express").Router();
var qr = require("../services/qrCodeGenerator/qrCode")


// router.get("/", (req, res)=>{
//         QRCode.toDataURL("Hari Shah")
//     .then(url => {
//         res.render("index.ejs", {url})
//     })
//     .catch(err => {
//       console.error(err)
//     })
// });
router.get("/", async (req, res)=>{
  const generatedqr = await qr.generateQR("Hari Shah");
  console.log("The generated qr is " + generatedqr);
  res.render("index.ejs", {url:generatedqr});
});


module.exports = router;