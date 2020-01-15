const functions = require('firebase-functions');
const app = require('express')();

const FBAuth = require('./utils/fbAuth');

const {
  getAllScreams,
  postOneScream,
  getScream,
  deleteScream,
  likeScream,
  unlikeScream,
  commentOnScream
} = require('./handlers/screams');

const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser
} = require('./handlers/users');


// Scream routes
app.get('/screams', getAllScreams);
app.post('/screams', FBAuth, postOneScream);
app.get('/screams/:screamId', getScream);
app.delete('/screams/:screamId', FBAuth, deleteScream);
app.get('/screams/:screamId/like', FBAuth, likeScream);
app.get('/screams/:screamId/unlike', FBAuth, unlikeScream);
app.post('/screams/:screamId/comment', FBAuth, commentOnScream);

// Users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);


exports.api = functions.https.onRequest(app);