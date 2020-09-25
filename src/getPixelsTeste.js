
const src = `./imgTestes/lego.jpeg`;

var getPixels = require("get-pixels")

getPixels(src, function (err, pixels) {
    if (err) {
        console.log("Bad image path")
        return
    }
    console.log("got pixels", pixels.shape.slice())
})