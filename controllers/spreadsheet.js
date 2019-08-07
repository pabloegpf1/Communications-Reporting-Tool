var Excel = require('exceljs');
var DB = require("../models/queries/spreadsheet");

exports.createPressClippingSpreadsheet = async (request, response) => {
  var workbook = new Excel.Workbook();
  await createClippingWorksheet(workbook,request.body.initial_date,request.body.final_date)
  await createSMShareWorksheet(workbook,request.body.initial_date,request.body.final_date)
  saveAndDownload(workbook,response)
};

function saveAndDownload(workbook,response){
  workbook.xlsx.writeFile('./documents/PRESS_RELEASE_CLIPPING.xlsx').then(function() {
    response.download('./documents/PRESS_RELEASE_CLIPPING.xlsx');
  });
}

async function createClippingWorksheet(workbook,initial_date,final_date){
  var worksheet = workbook.addWorksheet('Clipping');
  await DB.getImpacts(initial_date,final_date).then((impacts) => {
    if(impacts.length == 0) return 
    var headers = ["Audience","Month"];
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
    for(let i in impacts){
      const date = new Date(impacts[i].Date)
      var cols = [];
      cols.push(1);
      cols.push(date.getMonth()+1);
      impacts[i].Date = new Date( Date.UTC( date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()))
      Object.keys(impacts[i]).forEach(key => {
        cols.push(impacts[i][key]);
      })
      worksheet.addRow(cols);
    }
    worksheet.autoFilter = {
      from: 'A1',
      to: 'V1',
    }
  })
}

async function createSMShareWorksheet(workbook,initial_date,final_date){
  var worksheet = workbook.addWorksheet('SM Shares');
  await DB.getShares(initial_date,final_date).then((shares) => {
    console.log(shares)
    var headers = ["Number of Posts","Month"];
    if(shares.length == 0) return 
    Object.keys(shares[0]).forEach(key => {
      headers.push(key);
    })
    let headerRow = worksheet.addRow(headers);
    headerRow.fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'98fb98'},
      bgColor:{argb:'FF0000FF'}
    };
    for(let i in shares){
      const date = new Date(shares[i].Date)
      var cols = [];
      cols.push(1);
      cols.push(date.getMonth()+1);
      shares[i].Date = new Date( Date.UTC( date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()))
      Object.keys(shares[i]).forEach(key => {
        cols.push(shares[i][key]);
      })
      worksheet.addRow(cols);
    }
    worksheet.autoFilter = {
      from: 'A1',
      to: 'V1',
    }
  })
}

async function createSMShareWorksheet(workbook,initial_date,final_date){
  var worksheet = workbook.addWorksheet('SM Shares');
  await DB.getShares(initial_date,final_date).then((shares) => {
    console.log(shares)
    var headers = ["Number of Posts","Month"];
    if(shares.length == 0) return 
    Object.keys(shares[0]).forEach(key => {
      headers.push(key);
    })
    let headerRow = worksheet.addRow(headers);
    headerRow.fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'98fb98'},
      bgColor:{argb:'FF0000FF'}
    };
    for(let i in shares){
      const date = new Date(shares[i].Date)
      var cols = [];
      cols.push(1);
      cols.push(date.getMonth()+1);
      shares[i].Date = new Date( Date.UTC( date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()))
      Object.keys(shares[i]).forEach(key => {
        cols.push(shares[i][key]);
      })
      worksheet.addRow(cols);
    }
    worksheet.autoFilter = {
      from: 'A1',
      to: 'M1',
    }
  })
}