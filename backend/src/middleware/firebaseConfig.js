const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.PROJEK_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MASSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};

module.exports = firebaseConfig;

  