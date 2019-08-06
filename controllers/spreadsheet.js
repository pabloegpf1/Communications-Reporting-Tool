var Excel = require('exceljs');
var DB = require("../models/queries/spreadsheet");

exports.createPressClippingSpreadsheet = (request, response) => {
  var workbook = new Excel.Workbook();
  var worksheet = workbook.addWorksheet('Clipping');
  DB.getImpacts().then((impacts) => {
    var headers = ["Audience"];
    Object.keys(impacts[0]).forEach(key => {
      headers.push(key);
    })
    let headerRow = worksheet.addRow(headers);
    headerRow.fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'98fb98'},
      bgColor:{argb:'FF0000FF'}
    };
    for(let i  in impacts){
      var cols = [];
      cols.push(1);
      Object.keys(impacts[i]).forEach(key => {
        cols.push(impacts[i][key]);
      })
      worksheet.addRow(cols);
    }
    worksheet.autoFilter = {
      from: 'A1',
      to: 'V1',
    }
    workbook.xlsx.writeFile('./documents/PRESS_RELEASE_CLIPPING.xlsx').then(function() {
      response.download('./documents/PRESS_RELEASE_CLIPPING.xlsx');
    });
  })
};

