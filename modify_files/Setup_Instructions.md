# Setup Instructions

## 1. Create Google Apps Script
1. Go to script.google.com
2. Click "New Project"
3. Copy the code from `RegistrationScript.gs`
4. Save the project

## 2. Deploy as Web App
1. Click "Deploy" → "New deployment"
2. Type: "Web app"
3. Execute as: "Me"
4. Who has access: "Anyone"
5. Click "Deploy"
6. Copy the web app URL

## 3. Update HTML File
Replace this line in your HTML:
```javascript
const REGISTRATION_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';
```

## 4. Test
1. Open your HTML file
2. Register for an event
3. Check your Google Drive for "Event Registrations" spreadsheet

The script will automatically create a sheet with headers:
- Timestamp
- Event Title  
- Full Name
- Email
- Phone
- Relationship
- Notes