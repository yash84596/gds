function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Registrations');
  
  if (!sheet) {
    sheet = ss.insertSheet('Registrations');
    sheet.getRange(1, 1, 1, 7).setValues([['Timestamp', 'Event Title', 'Full Name', 'Email', 'Phone', 'Relationship', 'Notes']]);
  }
  
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.eventTitle, data.fullName, data.email, data.phone, data.relationship, data.notes]);
  
  return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*');
}

function doOptions() {
  return ContentService.createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}