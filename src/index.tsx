import { FirebaseOptions } from "firebase/app";
import { StrictMode } from "react";
import { render } from "react-dom";
import { FirebaseAppProvider } from "reactfire";

import App from "./App";
import { ThemeContextProvider } from "./components/contexts/ThemeContextProvider";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
} as FirebaseOptions;

render(
  <StrictMode>
    <ThemeContextProvider>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </ThemeContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
