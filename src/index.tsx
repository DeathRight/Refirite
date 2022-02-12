import { FirebaseOptions } from "firebase/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom";
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

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StrictMode>
    <ThemeContextProvider>
      <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
        <App />
      </FirebaseAppProvider>
    </ThemeContextProvider>
  </StrictMode>
);
