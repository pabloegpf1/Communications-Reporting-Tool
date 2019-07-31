var Excel = require('exceljs');

exports.createPressClippingSpreadsheet = (request, response) => {
  var workbook = new Excel.Workbook();
  workbook.xlsx.readFile('./views/templates/PRESS_RELEASE_CLIPPING.xlsx')
  .then(function() {
    var sheet = workbook.addWorksheet('My Sheet', {properties:{tabColor:{argb:'FFC0000'}}});
    
    workbook.xlsx.writeFile('./views/templates/PRESS_RELEASE_CLIPPING.xlsx')
    .then(function() {
      response.download('./views/templates/PRESS_RELEASE_CLIPPING.xlsx');
    });
  })
  .catch(err => response.render("error", { message: "Error", error: err }));
};
