import crivo from './crivo.js'
import cores from './cores.js'
import mostraCores from './mostraCores.js'
import getSrc from './geraPdf.js'
import converterEmImg from './jimpTestes.js'
import cv from './opencv'
// import printPDF from './geraPdf.js'


//let btnPdf = document.getElementById('criarPDF')
let toPrint = document.getElementById('inputOutput')

let imgElementShow = document.getElementById('imageSrcShow');
let imgElement = document.getElementById('imageSrc');

let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0])
    imgElementShow.src = URL.createObjectURL(e.target.files[0])
}, false);

imgElement.onload = function () {
    let src = cv.imread('imageSrc')
    let res = cores(src)
    let porcentagens = crivo(res)
    preenchePorcentagens(porcentagens)
    let resBranco = mostraCores(src, res)
    // console.log(res)
    // console.log(res[0].type())
    cv.imshow('canvasOutput0', res[0]);
    cv.imshow('canvasOutput1', res[1]);
    cv.imshow('canvasOutput2', res[2]);
    cv.imshow('canvasOutput3', res[3]);
    cv.imshow('canvasOutput4', res[4]);
    cv.imshow('canvasOutput5', res[5]);
    cv.imshow('canvasOutput6', res[6]);
    cv.imshow('canvasOutput7', res[7]);
    cv.imshow('canvasOutput8', res[8]);
    // src.delete(); dst.delete(); low.delete(); high.delete(); srcHSV.delete();

};
function preenchePorcentagens(porcentagens) {
    let resvermelho = document.getElementById('txtvermelho')
    let reslaranja = document.getElementById('txtlaranja')
    let resamarelo = document.getElementById('txtamarelo')
    let resverde = document.getElementById('txtverde')
    let resciano = document.getElementById('txtciano')
    let resazul = document.getElementById('txtazul')
    let resvioleta = document.getElementById('txtvioleta')
    let resmagenta = document.getElementById('txtmagenta')
    let resbranco = document.getElementById('txtbranco')

    resvermelho.innerText = `Porcentagem de vermelho: `
    reslaranja.innerHTML = `Porcentagem de laranja: `
    resamarelo.innerHTML = `Porcentagem de amarelo: `
    resverde.innerHTML = `Porcentagem de verde: `
    resciano.innerHTML = `Porcentagem de ciano: `
    resazul.innerHTML = `Porcentagem de azul: `
    resvioleta.innerHTML = `Porcentagem de violeta: `
    resmagenta.innerHTML = `Porcentagem de magenta: `
    resbranco.innerHTML = `Porcentagem de branco: `

    resvermelho.innerText += ` ${porcentagens.vermelhoPorcento}`
    reslaranja.innerHTML += `${porcentagens.laranjaPorcento}`
    resamarelo.innerHTML += `${porcentagens.amareloPorcento}`
    resverde.innerHTML += `${porcentagens.verdePorcento}`
    resciano.innerHTML += `${porcentagens.cianoPorcento}`
    resazul.innerHTML += `${porcentagens.azulPorcento}`
    resvioleta.innerHTML += `${porcentagens.violetaPorcento}`
    resmagenta.innerHTML += `${porcentagens.magentaPorcento}`
    resbranco.innerHTML += `${porcentagens.brancoPorcento}`


}

// btnPdf.onclick = criarPedeEfe(toPrint)

function criarPedeEfe(elemento) {
    printPDF(elemento)
}


function onOpenCvReady() {
    move()
}

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                elem.innerHTML = ''
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }

        }
    }
}