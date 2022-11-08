// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js",
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCwdWKZo4h03IqLGmInSPIsDtArvtIJzpA",
  authDomain: "ddokbun-89ed0.firebaseapp.com",
  projectId: "ddokbun-89ed0",
  storageBucket: "ddokbun-89ed0.appspot.com",
  messagingSenderId: "977818145024",
  appId: "1:977818145024:web:4b33968439dff5cd1063e5",
  measurementId: "G-PZ8KF65XZ7",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
