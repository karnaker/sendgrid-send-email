# How to send email using SendGrid and Node.js

## 1. Make sure you have the prerequisites
SendGrid's library requires a recent version of Node.js.

## 2. Create a SendGrid API key (if you don't already have one)
This allows your application to authenticate to SendGrid's API and send mail. You can enable or disable additional permissions on the API keys page.

## 3. Create an environment variable
Update your development environment with your SENDGRID_API_KEY. Run the following in your shell:
```Shell
echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env
```

## 4. Install the SendGrid package
The following recommended installation requires npm. If you are unfamiliar with npm, see the npm docs. Npm comes installed with Node.js since node version 0.8.x, therefore you likely already have it:
```Shell
npm install --save @sendgrid/mail
```

## 5. Send your first email
Create a file in your project directory named sendgrid.js:
```Shell
touch sendgrid.js
```

The following is the minimum needed code to send an email:
```Javascript
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
```

Test your code by running:
```
node sendgrid.js
```
