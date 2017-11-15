//  Create and Deploy Your First Cloud Functions
//  https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

exports.sendPush = functions.database.ref('/push').onWrite(event => {

  // let projectStateChanged = false;
  // let projectCreated = false;
  let value = event.data.val();

  console.log(event.data);

  var topic = "All";

  let payload = {
    notification: {
      title: 'teste',
      body: 'teste',
      sound: 'default',
      badge: '1'
    }
  };

  admin.messaging().sendToTopic(topic, payload).then(function(response) {
    // See the MessagingTopicResponse reference documentation for the
    // contents of response.
    console.log("Successfully sent message:", response);
  }).catch(function(error) {
    console.log("Error sending message:", error);
  });
});


const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmail = functions.database.ref('/users/{uid}').onWrite(event => {
  const snapshot = event.data;
  const val = snapshot.val();

  if (!snapshot.changed('subscribedToMailingList')) {
    return;
  }

  const mailOptions = {
    from: '"Spammy Corp." <noreply@firebase.com>',
    to: val.email
  };

  // The user just subscribed to our newsletter.
  if (val.subscribedToMailingList) {
    mailOptions.subject = 'Thanks and Welcome!';
    mailOptions.text = 'Thanks you for subscribing to our newsletter. You will receive our next weekly newsletter.';
    return mailTransport.sendMail(mailOptions).then(() => {
      console.log('New subscription confirmation email sent to:', val.email);
    }).catch(error => {
      console.error('There was an error while sending the email:', error);
    });
  }

  // The user unsubscribed to the newsletter.
  mailOptions.subject = 'Sad to see you go :`(';
  mailOptions.text = 'I hereby confirm that I will stop sending you the newsletter.';
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New unsubscription confirmation email sent to:', val.email);
  }).catch(error => {
    console.error('There was an error while sending the email:', error);
  });
});
