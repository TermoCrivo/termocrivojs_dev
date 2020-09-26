
const src = `./imgTestes/lego.jpeg`;

var getPixels = require("get-pixels")

getPixels(src, function (err, pixels) {
    if (err) {
        console.log("Bad image path");
        return;
    }
    let rgb = []
    for (let y = 0; y < pixels.shape[1]; y++) {
        for (let x = 0; x < pixels.shape[0]; x++) {

            const r = pixels.get(x, y, 0);
            const g = pixels.get(x, y, 1);
            const b = pixels.get(x, y, 2);
            rgb.push([r, g, b])
            // console.log(rgba);
        }
    }
    console.log(rgb)
});