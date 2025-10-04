# Google Apps Script Setup Guide for Event Registration

## Step 1: Create a New Google Apps Script Project

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `RegistrationScript.gs`
4. Save the project with a name like "Event Registration Handler"

## Step 2: Deploy the Script as a Web App

1. In the Apps Script editor, click "Deploy" → "New deployment"
2. Choose type: "Web app"
3. Set the following configuration:
   - **Description**: Event Registration Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click "Deploy"
5. **Important**: Copy the Web App URL that appears - you'll need this for your HTML file

## Step 3: Update Your HTML File

Replace the `REGISTRATION_SCRIPT_URL` in your HTML file with the Web App URL you copied:

```javascript
const REGISTRATION_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';
```

## Step 4: Create or Link a Google Sheet

The script will automatically:
- Create a new Google Sheet called "Event Registrations" if none exists
- Create a "Registrations" sheet with proper headers:
  - Timestamp
  - Event Title
  - Full Name
  - Email
  - Phone
  - Relationship
  - Notes

## Step 5: Test the Registration

1. Open your HTML file in a browser
2. Try registering for an event
3. Check your Google Drive for the "Event Registrations" spreadsheet
4. Verify that the data appears correctly with proper formatting

## Headers in Google Sheet

The script automatically creates these headers with formatting:
- **Background**: Dark blue (#1F3A3D)
- **Text**: White
- **Font**: Bold, centered
- **Columns**: Auto-resized for readability

## Troubleshooting

### If registrations aren't working:

1. **Check the Web App URL**: Make sure it's correctly copied to your HTML file
2. **Verify permissions**: The script needs permission to create/edit spreadsheets
3. **Check browser console**: Look for error messages in developer tools
4. **Test the script**: Use the `testRegistration()` function in Apps Script editor

### Common Issues:

- **CORS errors**: The script includes proper CORS headers
- **Permission denied**: Make sure the script is deployed with "Execute as: Me"
- **Data not appearing**: Check if the sheet name is exactly "Registrations"

## Security Notes

- The script validates required fields (Full Name, Email, Phone)
- All data is stored in your personal Google Drive
- The Web App URL should be kept secure but can be public for form submissions
- Consider adding additional validation as needed

## Customization

You can modify the script to:
- Add more form fields
- Change validation rules
- Send confirmation emails
- Format data differently
- Add data to multiple sheets

The current implementation is minimal and focused on core functionality as requested.