let btnPdf = window.document.getElementById('criarPDF')

function printPDF() { 
  print()
  // let coresValores = [{
  //     nome: 'vermelho',
  //     r:255,
  //     g:0,
  //     b:0
  //   },{
  //       nome: 'laranja',
  //       r: 255,
  //       g: 130,
  //       b: 0
  //   },{
  //       nome: 'amarelo',
  //       r: 255,
  //       g: 255,
  //       b: 0
  //   },{
  //       nome: 'verde',
  //       r: 0,
  //       g: 255,
  //       b: 0
  //   }]

  // const doc = new jsPDF()
    // doc.addImage("assets/img/logo.png", "PNG", 5, 5,221*0.2,39*0.2);
    // doc.setLineWidth(1)
    // doc.line(5, 15, 205, 15)
    // doc.html(document.getElementById('print'), {
    //   callback: function (doc) {
    //   doc.save();
    //   },
    //   x: 1,
    //   y: 2
    // });
    
  // let altura = 30
  //   coresValores.forEach((cor)=>{
  //     doc.setTextColor(cor.r, cor.g, cor.b)
  //     doc.text(`${cor.nome}`, 120, altura)
  //     altura=altura+10
  //   })
  //doc.autoPrint({variant: 'non-conform'});
  //doc.save()
}

btnPdf.onclick = printPDF