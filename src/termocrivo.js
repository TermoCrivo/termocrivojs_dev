let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function () {
    let src = cv.imread('imageSrc');
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
    cv.imshow('canvasOutput', dst);
    src.delete(); dst.delete();
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