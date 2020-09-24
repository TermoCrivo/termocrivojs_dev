let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function () {
    let src = cv.imread('canvasInput');
    let dst = new cv.Mat();
    let gray = new cv.Mat();

    // gray and threshold image
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
    cv.threshold(gray, gray, 0, 255, cv.THRESH_BINARY_INV + cv.THRESH_OTSU);

    cv.imshow('canvasOutput', gray);
    src.delete(); dst.delete(); gray.delete();
};
function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}