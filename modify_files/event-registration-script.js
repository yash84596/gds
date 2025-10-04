function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Open the registration spreadsheet
    const sheet = SpreadsheetApp.openById('YOUR_REGISTRATION_SHEET_ID').getActiveSheet();
    
    // Add data to sheet
    sheet.appendRow([
      data.timestamp,
      data.eventTitle,
      data.fullName,
      data.email,
      data.phone,
      data.relationship,
      data.notes
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Registration submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}