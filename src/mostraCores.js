

export default function mostraCores(src, mascaras) {

    let fundoBranco = []
    // let pixel = new cv.Mat()
    // mascaras.forEach(matriz => {

    //     for (let i = 0; i < matriz.rows; i++) {
    //         for (let j = 0; j < matriz.cols; j++) {

    //             if (matriz.isContinuous()) {
    //                 let h = matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels()]
    //                 let s = matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels() + 1]
    //                 let v = matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels() + 2]
    //                 let a = matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels() + 3]

    //                 if (v == 0) {
    //                     matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels()] = 255
    //                     matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels() + 1] = 255
    //                     matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels() + 2] = 255
    //                     matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels() + 3] = 255
    //                 }
    //             }
    //         }

    //     }
    //     fundoBranco.push(matriz)
    // })



    // mascaras.forEach(matriz => {
    //     let maskInv = cv.Mat()
    //     cv.bitwise_not(matriz, maskInv)

    // });

    let dst = new cv.Mat()
    console.log(src.type())
    console.log(mascaras[0].type())
    mascaras[0].convertTo(dst, cv.CV_8S)
    console.log(mascaras[0].type())

    // let maskInv = new cv.Mat()
    // let final = new cv.Mat()
    // cv.bitwise_not(mascaras[0], maskInv)
    // // cv.cvtColor(mascaras[0], maskRgb, cv.COLOR_HSV2RGBA, 1)
    // // cv.add(src, maskRgb, final)
    // let dst = src.clone();
    // src.copyTo(dst, maskInv);
    // console.log(dst)
    fundoBranco.push(dst)

    return fundoBranco
}