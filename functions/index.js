const functions = require('firebase-functions');
let admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp(functions.config().firebase);

exports.sendPush = functions.database.ref('/projects/{projectId}').onWrite(event => {

    let projectStateChanged = false;
    let projectCreated = false;
    let projectData = event.data.val();

    if (!event.data.previous.exists()) {
        projectCreated = true;
    }

    if (!projectCreated && event.data.changed()) {
        projectStateChanged = true;
    }

    let msg = 'A project state was changed';

	if (projectCreated) {
		msg = `The following new project was added to the project: ${projectData.title}`;
	}

    return loadUsers().then(users => {
        let tokens = [];
        for (let user of users) {
            tokens.push(user.pushToken);
        }
        let payload = {
            notification: {
                title: 'Firebase Notification',
                body: msg,
                sound: 'default',
                badge: '1'
            }
        };
        return admin.messaging().sendToDevice(tokens, payload);
    });
});

function loadUsers() {

    let dbRef = admin.database().ref('/users');
    
    let defer = new Promise((resolve, reject) => {
        dbRef.once('value', (snap) => {
            let data = snap.val();
            let users = [];
            for (var property in data) {
                users.push(data[property]);
            }
            resolve(users);
        }, (err) => {
            reject(err);
        });
    });
    return defer;
}
