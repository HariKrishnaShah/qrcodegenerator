const express = require("express");
const morgan = require("morgan");
var QRCode = require('qrcode');

const app = express();
const port = 4000;
const mainIndex = require("./routes/index.js");
app.use(express.json())
app.use(morgan("combined"));
app.set("view engine", "ejs")
app.set("views", "./views")
app.use("/", mainIndex);
app.use(express.static("public"));

app.get("/getqr", (req, res)=>{
    console.log("The url code is " + req.header("urlhead"));
    QRCode.toDataURL(req.header('urlhead'))
    .then(ur => {
       res.json(ur);
      
    })
    .catch(err => {
      console.error(err)
    })
})

app.listen(port, ()=>
{
    console.log("Listening at http://localhost:4000")
})

