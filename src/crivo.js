
import cores from './cores.js'

export default function crivo(mascaras) {

    let somaPixel = []

    mascaras.forEach(matriz => {
        let preto = 3
        for (let i = 0; i < matriz.rows; i++) {
            for (let j = 0; j < matriz.cols; j++) {
                if (matriz.isContinuous()) {
                    let v = matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels() + 2]
                    if (v == 0) {
                        preto++
                    }
                }
            }
        }
        somaPixel.push(preto)
    })

    console.log(somaPixel)


    let row = 2, col = 3
    if (mascaras[5].isContinuous()) {
        let H = mascaras[5].data[row * mascaras[5].cols * mascaras[5].channels() + col * mascaras[5].channels()]
        let S = mascaras[5].data[row * mascaras[5].cols * mascaras[5].channels() + col * mascaras[5].channels() + 1]
        let V = mascaras[5].data[row * mascaras[5].cols * mascaras[5].channels() + col * mascaras[5].channels() + 2]
        let A = mascaras[5].data[row * mascaras[5].cols * mascaras[5].channels() + col * mascaras[5].channels() + 3]

        console.log(`Pixels: ${mascaras[5].cols * mascaras[5].rows}`)
        console.log(`HSV - A: ${typeof H}, ${S}, ${V} - ${A} `)
        // console.log(`Mat.cols: ${ mascaras[5].cols } Mat.channels: ${ mascaras[5].channels() } `)
        console.log(`${row} * ${mascaras[5].cols} * ${mascaras[5].channels()} + ${col}* ${mascaras[5].channels()} `)
    }


    // for (let i in mascaras) {
    //     for (let j in mascaras[i].rows) {
    //         for (let k in mascaras[i].cols)
    //             if (mascaras[i].isContinuous()) {
    //                 //let H = mascaras[i].data[j * mascaras[i].cols * mascaras[i].channels() + k * mascaras[i].channels()];
    //                 //let S = mascaras[i].data[j * mascaras[i].cols * mascaras[i].channels() + k * mascaras[i].channels() + 1];
    //                 let V = mascaras[i].data[j * mascaras[i].cols * mascaras[i].channels() + k * mascaras[i].channels() + 2]
    //                 if (V == 0) {
    //                     somaPixel[i] = preto++
    //                 }
    //             }
    //     }
    // }

    let res = {
        vermelhoPorcento: 0,
        laranjaPorcento: 0,
        amareloPorcento: 0,
        verdePorcento: 0,
        cianoPorcento: 0,
        azulPorcento: 0,
        magentaPorcento: 0,
        violetaPorcento: 0,
        brancoPorcento: 0
    }

    return res
}
