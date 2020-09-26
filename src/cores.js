function cores(imgHsv, coresRange, lastMask, indice) {

    let mascaras = {
        ultimaMascara: lastMask
    }
    if (indice <= coresRange.length) {
        let mask = cv.inRange(imgHsv, coresRange.low[0], coresRange.up[0])
        mascaras[`mask${indice}`] = mask
        mascaras.ultimaMascara = mascaras.ultimaMascara - mask
        cores(imgHsv, coresRange, lastMask, indice++)
    } else {
        return mascaras
    }

}

module.exports = cores