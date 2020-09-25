let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function () {
    let src = cv.imread('imageSrc', 1);
    let gray = new cv.Mat();
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
    // console.log(src)
    console.log(gray.data)
    // let dst = new cv.Mat();
    // let gray = new cv.Mat();
    // let opening = new cv.Mat();
    // let coinsBg = new cv.Mat();
    // cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
    // cv.threshold(gray, gray, 0, 255, cv.THRESH_BINARY_INV + cv.THRESH_OTSU);

    // // get background
    // let M = cv.Mat.ones(3, 3, cv.CV_8U);
    // cv.erode(gray, gray, M);
    // cv.dilate(gray, opening, M);
    // cv.dilate(opening, coinsBg, M, new cv.Point(-1, -1), 3);

    cv.imshow('canvasOutput', gray);
    // src.delete(); dst.delete(); gray.delete(); opening.delete(); coinsBg.delete(); M.delete();


    // let src = cv.imread('imageSrc');
    // let dst = new cv.Mat();
    // // You can try more different parameters
    // cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
    // cv.imshow('canvasOutput', dst);
    // src.delete(); dst.delete();
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