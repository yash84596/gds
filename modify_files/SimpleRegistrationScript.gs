function doPost(e) {
  try {
    // Get your specific spreadsheet by ID (replace with your sheet ID)
    const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Replace with your Google Sheet ID
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    
    // Get or create the sheet
    let sheet = spreadsheet.getSheetByName('Registrations');
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Registrations');
      // Add headers
      sheet.getRange(1, 1, 1, 7).setValues([['Timestamp', 'Event Title', 'Full Name', 'Email', 'Phone', 'Relationship', 'Notes']]);
    }
    
    // Parse data
    const data = JSON.parse(e.postData.contents);
    
    // Add row
    sheet.appendRow([
      new Date(),
      data.eventTitle,
      data.fullName,
      data.email,
      data.phone,
      data.relationship,
      data.notes
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Registration script is running')
    .setMimeType(ContentService.MimeType.TEXT);
}