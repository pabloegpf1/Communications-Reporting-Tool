var PDFDocument, doc;
var fs = require('fs');
PDFDocument = require('pdfkit');

exports.createPDF = (request,response) =>{
    doc = new PDFDocument;
    const writeStream = fs.createWriteStream("documents/"+ new Date().getFullYear() +"-IMDEA-NETWORKS-Annual-Communications-Report.pdf")
    doc.pipe(writeStream);

    //PDF CONTENTS

    doc.font('Times-Bold').fontSize(18)
    doc.text('IMDEA Networks Communications Report',{
        align: 'center'
    })
    
    doc.moveDown(1)

    doc.font('Times-Roman').fontSize(15)
    doc.text('Media Impact – Year '+ new Date().getFullYear(),{
        align: 'center'
    })

    doc.moveDown(5)
    doc.font('Times-Bold')

    doc.text('Introduction', {
        align: 'left'
    })

    doc.moveDown(0.5)

    doc.font('Times-Roman').fontSize(11)

    doc.text('This dossier covers the annual communication and media dissemination activities performed by the Operations department at IMDEA Networks. IMDEA Networks strives to have an impact on the media as it constitutes an optimal channel for our scientific work to reach the general public. We believe that science should be useful to society and help resolve its more pressing issues. Thus, our goal is to go beyond the scientific community and communicate and interact with those who are the ultimate beneficiaries of our scientific results.', {
        align: 'justify'
    })

    //END OF CONTENTS
    doc.end();
    writeStream.on('finish', () => { 
        response.download("documents/"+ new Date().getFullYear() +"-IMDEA-NETWORKS-Annual-Communications-Report.pdf")
    });
}