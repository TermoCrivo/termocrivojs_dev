import jsPDF from 'jspdf'

let btnPdf = document.getElementById('criarPDF')

function printPDF() {
    console.log('Entrou')
    const doc = new jsPDF()
    doc.text("Hello world!", 10, 10)
    doc.save("./exported/a4.pdf")

}
btnPdf.onclick = printPDF