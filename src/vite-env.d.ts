/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  VITE_FIREBASE_APIKEY: string;
  VITE_FIREBASE_AUTHDOMAIN: string;
  VITE_FIREBASE_PROJECTID: string;
  VITE_FIREBASE_STORAGEBUCKET: string;
  VITE_FIREBASE_MESSAGINGSENDERID: string;
  VITE_FIREBASE_APPID: string;
  VITE_FIREBASE_MEASUREMENTID: string;
  VITE_APPCHECK_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
