import { createContext } from 'react';
import app from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

const FirebaseContext = createContext(null);

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MESUREMENT_ID,
};

const FirebaseProvider = ({ children }: any) => {
  let firebase: any = {
    app: null,
    db: null,
    api: null,
  };

  if (!app.apps.length) {
    let defaultApp = app.initializeApp(config);

    firebase = {
      app: defaultApp,
      db: defaultApp.database(),
      api: {},
    };
  }
  return <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>;
};

export { FirebaseProvider, FirebaseContext };

