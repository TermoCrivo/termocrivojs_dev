
import cores from './cores.js'

export default function crivo(mascaras) {

    let somaPixel = []
    let preto = 0
    for (let i in mascaras) {
        for (let j in mascaras[i].rows) {
            for (let k in mascaras[i].cols)
                if (mascaras[i].isContinuous()) {
                    //let H = mascaras[i].data[j * mascaras[i].cols * mascaras[i].channels() + k * mascaras[i].channels()];
                    //let S = mascaras[i].data[j * mascaras[i].cols * mascaras[i].channels() + k * mascaras[i].channels() + 1];
                    let V = mascaras[i].data[j * mascaras[i].cols * mascaras[i].channels() + k * mascaras[i].channels() + 2]
                    if (V == 0) {
                        somaPixel[i] = preto++
                    }
                }
        }
    }

    console.log(somaPixel)

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
