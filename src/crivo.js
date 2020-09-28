
import cores from './cores.js'

export default function crivo(mascaras) {

    analisaPretos(mascaras)

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

function analisaPretos(mascaras) {
    let somaPixel = []

    mascaras.forEach(matriz => {
        let preto = 3
        let total = matriz.cols * matriz.rows
        let porcento
        for (let i = 0; i < matriz.rows; i++) {
            for (let j = 0; j < matriz.cols; j++) {
                if (matriz.isContinuous()) {
                    let v = matriz.data[i * matriz.cols * matriz.channels() + j + matriz.channels() + 2]
                    if (v == 0) {
                        preto++
                        porcento = ((total - preto) / total) * 100
                    }
                }
            }
        }
        somaPixel.push(porcento)
    })

    console.log(somaPixel)
}

