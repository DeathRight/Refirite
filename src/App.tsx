import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth } from "firebase/auth";
import { FunctionComponent } from "react";
import { AppCheckProvider, AuthProvider, useFirebaseApp } from "reactfire";

export const AuthHandle: FunctionComponent = ({ children }): JSX.Element => (
  <div className="App">hello world</div>
);

export default function App(): JSX.Element {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(import.meta.env.VITE_APPCHECK_TOKEN),
    isTokenAutoRefreshEnabled: true,
  });

  return (
    <AuthProvider sdk={auth}>
      <AuthHandle>
        <AppCheckProvider sdk={appCheck}>
          <div className="App">hello world</div>
        </AppCheckProvider>
      </AuthHandle>
    </AuthProvider>
  );
}
