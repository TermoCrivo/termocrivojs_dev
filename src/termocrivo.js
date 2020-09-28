import crivo from './crivo.js'
import cores from './cores.js'

let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function () {
    let src = cv.imread('imageSrc');

    let res = cores(src)
    crivo(res)
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