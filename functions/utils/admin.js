const admin = require('firebase-admin');
const serviceAccount = require('../../socialape-76e29-serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-76e29.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };