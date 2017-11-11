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
  //admin.messaging().sendToDevice(tokens, payload);
  // if (!event.data.previous.exists()) {
  //     projectCreated = true;
  // }

  // if (!projectCreated && event.data.changed()) {
  //     projectStateChanged = true;
  // }

  //let msg = 'A project state was changed';

  // if (projectCreated) {
  // 	msg = `The following new project was added to the project: ${value.title}`;
  // }

  // return loadUsers().then(users => {
  //
  //     let tokens = [];
  //
  //     for (let user of users) {
  //         tokens.push(user.pushToken);
  //     }
  //
  //     let payload = {
  //         notification: {
  //             title: 'teste',
  //             body: 'teste',
  //             sound: 'default',
  //             badge: '1'
  //         }
  //     };
  //
  //     return admin.messaging().sendToDevice(tokens, payload);
  //
  // });
});

// function loadUsers() {
//
//     let dbRef = admin.database().ref('/users');
//
//     let defer = new Promise((resolve, reject) => {
//         dbRef.once('value', (snap) => {
//             let data = snap.val();
//             let users = [];
//             for (var property in data) {
//                 users.push(data[property]);
//             }
//             resolve(users);
//         }, (err) => {
//             reject(err);
//         });
//     });
//     return defer;
// }
