# Registration Not Working - Troubleshooting Steps

## Step 1: Get Your Google Sheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Copy the SHEET_ID part
4. In `SimpleRegistrationScript.gs`, replace `YOUR_SHEET_ID_HERE` with your actual sheet ID

## Step 2: Set Up the Script Correctly

1. Go to [script.google.com](https://script.google.com)
2. Create new project
3. Paste the `SimpleRegistrationScript.gs` code
4. **IMPORTANT**: Replace `YOUR_SHEET_ID_HERE` with your actual sheet ID
5. Save the project

## Step 3: Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Type: "Web app"
3. **Execute as**: Me (your email)
4. **Who has access**: Anyone
5. Click "Deploy"
6. **Grant permissions** when asked
7. Copy the web app URL

## Step 4: Update HTML File

Replace the URL in your HTML:
```javascript
const REGISTRATION_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';
```

## Step 5: Test and Debug

1. Open browser developer tools (F12)
2. Go to Console tab
3. Try submitting a registration
4. Check console for error messages

## Common Issues:

### Issue 1: "Script function not found"
- Make sure you deployed the script as a web app
- Check that the function name is `doPost`

### Issue 2: "Permission denied"
- Grant permissions to the script
- Make sure "Execute as: Me" is selected

### Issue 3: "CORS error"
- The script includes CORS headers
- Make sure you're using the correct web app URL

### Issue 4: "Invalid response"
- Check browser console for actual error
- Test the script URL directly in browser

## Quick Test:

1. Open your web app URL directly in browser
2. You should see: "Registration script is running"
3. If not, the deployment failed

## Manual Test in Apps Script:

Add this test function to your script:
```javascript
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        eventTitle: 'Test Event',
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        relationship: 'parent',
        notes: 'Test note'
      })
    }
  };
  
  const result = doPost(testData);
  console.log(result.getContent());
}
```

Run this function to test if the script works.