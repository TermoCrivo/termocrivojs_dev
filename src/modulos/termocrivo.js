import crivo from './crivo.js'
import cores from './cores.js'
import mostraCores from './mostraCores.js'
import getSrc from './geraPdf.js'
import refinar from './refinar.js'
import cortar from './crop.js'
import converterEmImg from './jimpimg.js'
import grabCut from './grabcut.js'
import cv from './opencv'
import preenchePorcentagens from './preencherPorcentagens.js'
import jimpCanvas from './jimpimg.js'
import kmeans from './kmeans.js'
import calcPorcentagens from './porcentagens.js'

let ident = document.getElementById('ident')
let identText = document.getElementById('identText')
let data = document.getElementById('data')
let dataText = document.getElementById('dataText')
let imgElementShow = document.getElementById('imageSrcShow');
let imgElement = document.getElementById('imageSrc');
let barra = document.getElementById('barra')


const canvasResult = document.getElementById("canvasResult")
const canvasCut = document.getElementById("canvasCut")
const canvasInput = document.getElementById("canvasInput")
const canvasRect = document.getElementById("canvasRect")
const canvasAdjust = document.getElementById("canvasAdjust")
const container = document.getElementById("container")
const containerCut = document.getElementById("containerCut")

const fg = document.getElementById("fg")
const bg = document.getElementById("bg")
const validate = document.getElementById("validate")
const crop = document.getElementById("crop")

let colorMarker = "green"
let inputElement = document.getElementById('fileInput');

inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0])
    // imgElementShow.src = URL.createObjectURL(e.target.files[0])
    barra.style.display = 'block'
}, false);

imgElement.onload = function () {
    identText.innerHTML = 'Id: '
    identText.innerHTML += ident.value
    dataText.innerHTML = 'Data '
    dataText.innerHTML += data.value
    let src = cv.imread('imageSrc')

    //let resBranco = mostraCores(src, res)
    let res = kmeans(src)

    cv.imshow("canvasResult",src)
    cv.imshow("canvasCut", src);
    cv.imshow("canvasInput", src);
    cv.imshow('canvasOutput0', res[0]);
    cv.imshow('canvasOutput1', res[1]);
    cv.imshow('canvasOutput2', res[2]);
    cv.imshow('canvasOutput3', res[3]);
    cv.imshow('canvasOutput4', res[4]);
    cv.imshow('canvasOutput5', res[5]);
    cv.imshow('canvasOutput6', res[6]);
    cv.imshow('canvasOutput7', res[7]);
    cv.imshow('canvasOutput8', res[8]);

    fg.disabled = false
    bg.disabled = false
    crop.disabled = false
    validate.disabled = false
    adjustContainerAndLayer()

    refinar(canvasAdjust, fg, colorMarker)    

    let options = {
        left: 1,
        top: 150,
        width: 479,
        height: 350
    }
    cortar(canvasCut, options)

    preenchePorcentagens(calcPorcentagens(res))


};

crop.onclick = () => { 

    let cropper = cortar(canvasCut)
    let src = cv.imread('canvasInput')
    let srcCut = jimpCanvas(src,cropper[1])
    let res = kmeans(srcCut)
    cv.imshow("canvasResult", srcCut)
    cv.imshow('canvasOutput0', res[0]);
    cv.imshow('canvasOutput1', res[1]);
    cv.imshow('canvasOutput2', res[2]);
    cv.imshow('canvasOutput3', res[3]);
    cv.imshow('canvasOutput4', res[4]);
    cv.imshow('canvasOutput5', res[5]);
    cv.imshow('canvasOutput6', res[6]);
    cv.imshow('canvasOutput7', res[7]);
    cv.imshow('canvasOutput8', res[8]);

    preenchePorcentagens(calcPorcentagens(res))
    
    cortar(canvasCut, cropper[1])
}

validate.onclick = () => {
    let cropper = cortar(canvasCut)

    let newmask = cv.imread("canvasAdjust", 0)
    let src = cv.imread("canvasInput")
    let grab = grabCut(src, newmask, cropper[1])
    cv.imshow('canvasOutput', grab);
    cv.imshow("canvasResult", grab)
    let srcGrab = cv.imread("canvasOutput")
    let res = kmeans(srcGrab)

    cv.imshow('canvasOutput0', res[0]);
    cv.imshow('canvasOutput1', res[1]);
    cv.imshow('canvasOutput2', res[2]);
    cv.imshow('canvasOutput3', res[3]);
    cv.imshow('canvasOutput4', res[4]);
    cv.imshow('canvasOutput5', res[5]);
    cv.imshow('canvasOutput6', res[6]);
    cv.imshow('canvasOutput7', res[7]);
    cv.imshow('canvasOutput8', res[8]);

    preenchePorcentagens(calcPorcentagens(res))
    
    cortar(canvasCut, cropper[1])
    
}

function adjustContainerAndLayer() {
    const box = canvasInput.getBoundingClientRect();
    canvasAdjust.width = box.width;
    canvasAdjust.height = box.height;
    container.style.width = box.width + "px";
    container.style.height = box.height + "px";
    containerCut.style.width = box.width + "px";
    containerCut.style.height = box.height + "px";
}

async function move() {
    let i = 0;
    if (i == 0) {
        i = 1;
        let elem = document.getElementById("myBar");
        let width = 20;
        let id = setInterval(() => {
            if (width >= 100) {
                elem.innerHTML = ''
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }, 20);
    }
}