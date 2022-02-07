import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth } from "firebase/auth";
import { FunctionComponent } from "react";
import { AppCheckProvider, AuthProvider, useFirebaseApp } from "reactfire";
import { styled } from "stitches.config";

import Backdrop from "./components/common/Backdrop";
import Card from "./components/common/Card";
import Modal from "./components/common/Modal";
import {
  useDarkModeState,
  useTheme,
} from "./components/contexts/ThemeContextProvider";
import Spinner from "./components/Spinner";
import ToggleTheme from "./components/ToggleThemeButton";
import globalStyles from "./styles/globalStyles";

const AppWrapper = styled("div", {
  backgroundColor: "$appBg",
  color: "$hiC",
  lineHeight: "$1",
  fontSize: "$sm",
  margin: "0",
  padding: "0",
  width: "100vw",
  height: "100vh",
});

export const AuthHandle: FunctionComponent = ({ children }): JSX.Element => (
  <div>{children}</div>
);

export default function App(): JSX.Element {
  globalStyles();
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(import.meta.env.VITE_APPCHECK_TOKEN),
    isTokenAutoRefreshEnabled: true,
  });

  const theme = useTheme();
  const [darkMode, setDarkMode] = useDarkModeState();

  return (
    <AuthProvider sdk={auth}>
      <AppWrapper className={theme}>
        <AuthHandle>
          <AppCheckProvider sdk={appCheck}>
            <Modal show={true} renderBackdrop={() => <Backdrop />}>
              <Card>
                <ToggleTheme
                  defaultPressed={darkMode}
                  onPressed={(p) => setDarkMode(p)}
                />
                hello world
                <Spinner />
              </Card>
            </Modal>
          </AppCheckProvider>
        </AuthHandle>
      </AppWrapper>
    </AuthProvider>
  );
}
