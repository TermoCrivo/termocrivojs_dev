// const crivo = require('./crivo.js')

let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function () {
    let src = cv.imread('imageSrc');
    let srcHSV = new cv.Mat();
    cv.cvtColor(src, srcHSV, cv.COLOR_RGB2HSV, 0);

    let low = new cv.Mat(srcHSV.rows, srcHSV.cols, srcHSV.type(), [0, 78, 51, 0]);
    let low2 = new cv.Mat(srcHSV.rows, srcHSV.cols, srcHSV.type(), [173, 78, 51, 0]);
    let high = new cv.Mat(srcHSV.rows, srcHSV.cols, srcHSV.type(), [7, 255, 255, 255]);
    let high2 = new cv.Mat(srcHSV.rows, srcHSV.cols, srcHSV.type(), [179, 255, 255, 255]);

    // You can try more different parameters

    let dst = new cv.Mat();
    let dst2 = new cv.Mat();
    let final = new cv.Mat()

    cv.inRange(srcHSV, low, high, dst);
    cv.inRange(srcHSV, low2, high2, dst2);
    cv.add(dst, dst2, final)
    cv.imshow('canvasOutput', final);
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