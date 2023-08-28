var QRCode = require('qrcode');

const generateQR = async (address)=>{
    let result =  await QRCode.toDataURL(address);
    return result;
    
}

module.exports = {generateQR}