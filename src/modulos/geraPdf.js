import jsPDF from 'jspdf'

let btnPdf = document.getElementById('criarPDF')
let div = document.getElementById('inputOutput')


function printPDF() {
    console.log('Entrou')
    const doc = new jsPDF()
    doc.html(document.body, {
        callback: function (doc) {
          doc.save();
        },
        x: 10,
        y: 10
     });
}

btnPdf.onclick = printPDF