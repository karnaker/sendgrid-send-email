// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: process.env.SENDGRID_RECIPIENT, // Change to your recipient
  from: process.env.SENDGRID_SENDER, // Change to your verified sender
  subject: 'Happy Friday!',
  text: 'This is an email sent using SendGrid and Node.js.',
  html: '<strong>This is an email sent using SendGrid and Node.js.</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
