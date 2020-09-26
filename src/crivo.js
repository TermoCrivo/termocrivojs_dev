const cores = require('./cores.js')


function crivo(imagem) {

    const coresRange = {
        low: [
            [0, 78, 51],
            [173, 78, 51],
            [8, 78, 51],
            [26, 78, 51],
            [31, 78, 51],
            [84, 78, 51],
            [99, 78, 51],
            [129, 78, 51],
            [144, 78, 51],
            [0, 0, 204]

        ],
        up: [
            [7, 255, 255],
            [179, 255, 255],
            [25, 255, 255],
            [30, 255, 255],
            [83, 255, 255],
            [98, 255, 255],
            [128, 255, 255],
            [143, 255, 255],
            [172, 255, 255],
            [179, 77, 255]
        ]


        // lowVermelho: [[0, 78, 51], [173, 78, 51]],
        // upVermelho: [[7, 255, 255], [179, 255, 255]],
        // lowLaranja: [8, 78, 51],
        // upLaranja: [25, 255, 255],
        // lowAmarelo: [26, 78, 51],
        // upAmarelo: [30, 255, 255],
        // lowVerde: [31, 78, 51],
        // upVerde: [83, 255, 255],
        // lowCiano: [84, 78, 51],
        // upCiano: [98, 255, 255],
        // lowAzul: [99, 78, 51],
        // upAzul: [128, 255, 255],
        // lowVioleta: [129, 78, 51],
        // upVioleta: [143, 255, 255],
        // lowMagenta: [144, 78, 51],
        // upMagenta: [172, 255, 255],
        // lowBranco: [0, 0, 204],
        // upBranco: [179, 77, 255]

    }
    let total = imagem.matSize[0] * imagem.matSize[1]
    let imgHsv = cv.cvtColor(imagem, cv.COLOR_RGB2HSV)
    let mascaras = cores(imgHsv, coresRange, imgHsv, 0)

    console.log(mascaras)
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


module.exports = crivo