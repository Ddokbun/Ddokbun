import firebase from "firebase/app";

export async function getToken() {
  if (firebase.apps.length) {
    const messaging = firebase.messaging();
    return await messaging.getToken({
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_VAPID_KEY,
    });
  } else {
    firebase.initializeApp({
      apiKey: "AIzaSyCwdWKZo4h03IqLGmInSPIsDtArvtIJzpA",
      authDomain: "ddokbun-89ed0.firebaseapp.com",
      projectId: "ddokbun-89ed0",
      storageBucket: "ddokbun-89ed0.appspot.com",
      messagingSenderId: "977818145024",
      appId: "1:977818145024:web:4b33968439dff5cd1063e5",
      measurementId: "G-PZ8KF65XZ7",
    });
    const messaging = firebase.messaging();
    return await messaging.getToken({
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_VAPID_KEY,
    });
  }
}
