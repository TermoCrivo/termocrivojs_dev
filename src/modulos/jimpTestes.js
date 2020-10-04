import Jimp from 'jimp'
import cv from './opencv'
export default async function converterEmImg(mascaras) {

    // let jimp = new Jimp({
    //     width: mascaras[0].cols,
    //     height: mascaras[0].rows,
    //     data: Buffer.from(mascaras[0].data)
    // })
    Jimp.read(mascaras, (err, lenna) => {
        if (err) throw err;
        var src = cv.matFromImageData(lenna.bitmap)
        console.log(src)
      });
    
    // jimp.write('../assets/exported/output.png');
}
