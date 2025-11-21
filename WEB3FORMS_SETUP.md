# Web3Forms Setup Guide

## Step 1: Get Your Access Key

1. Go to [Web3Forms](https://web3forms.com/)
2. Click on "Get Started for Free" or "Create Access Key"
3. Enter your email: **supunthennakoon27@gmail.com**
4. Click "Create Access Key"
5. You will receive an email with your unique access key
6. Verify your email address

## Step 2: Add Your Access Key

Open `index.html` and find this line (around line 254):

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual access key from Web3Forms.

Example:
```html
<input type="hidden" name="access_key" value="abc123-def456-ghi789">
```

## Step 3: Customize (Optional)

### Change Success Redirect
In `index.html`, you can change where users are redirected after submission:

```html
<input type="hidden" name="redirect" value="https://your-website.com/thank-you">
```

Or remove this line to stay on the same page (current setup shows success message on page).

### Customize Email Subject
Change the subject line that appears in your email:

```html
<input type="hidden" name="subject" value="New Contact Form Submission from Portfolio">
```

### Customize Reply-To
If you want replies to go to the sender's email, add:

```html
<input type="hidden" name="replyto" value="">
```

## Step 4: Test Your Form

1. Open your website in a browser
2. Fill out the contact form
3. Click "Send Message"
4. You should see a success message
5. Check your email (supunthennakoon27@gmail.com) for the form submission

## Features Included

✅ Form validation (required fields)
✅ Loading state while sending
✅ Success message with animation
✅ Error handling with user-friendly messages
✅ Auto-reset form after successful submission
✅ Mobile responsive
✅ Spam protection (built into Web3Forms)

## Form Fields Sent

The following information will be sent to your email:
- **Name**: Sender's name
- **Email**: Sender's email address
- **Subject**: Custom subject (optional)
- **Message**: The message content

## Troubleshooting

### Form not sending?
- Check that you've added your access key correctly
- Verify your email with Web3Forms
- Check browser console for errors (F12 → Console)

### Not receiving emails?
- Check your spam folder
- Verify your email address in Web3Forms dashboard
- Make sure your access key is active

### Styling the response message?
The success/error messages use inline styles, but you can customize them in `main.js` around line 95-115.

## Web3Forms Dashboard

Access your dashboard at: https://web3forms.com/dashboard
- View all form submissions
- Download submission data
- Manage your access keys
- Configure spam protection
- Set up webhook integrations

## Need Help?

- Web3Forms Documentation: https://docs.web3forms.com/
- Web3Forms Support: https://web3forms.com/support
