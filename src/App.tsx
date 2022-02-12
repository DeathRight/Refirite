import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth } from "firebase/auth";
import { FunctionComponent, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import {
  AppCheckProvider,
  AuthProvider,
  SuspenseWithPerf,
  useFirebaseApp,
  useInitPerformance,
  useSigninCheck,
} from "reactfire";
import { styled } from "stitches.config";

import AuthLand from "./AuthLand";
import { useTheme } from "./components/contexts/ThemeContextProvider";
import LoadingOverlay from "./components/LoadingOverlay";
import About from "./routes/About";
import Home from "./routes/Home";
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
  display: "flex",
});

const AuthHandle: FunctionComponent = ({ children }) => {
  const { data: signInCheckResult } = useSigninCheck();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signInCheckResult.signedIn) navigate("/auth");
  }, [signInCheckResult]);

  return <>{signInCheckResult.signedIn && children}</>;
};

export default function App(): JSX.Element {
  globalStyles();
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(import.meta.env.VITE_APPCHECK_TOKEN),
    isTokenAutoRefreshEnabled: true,
  });

  useInitPerformance(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    async (app) => {
      const { getPerformance } = await import("firebase/performance");
      return getPerformance(app);
    },
    { suspense: false } // false because we don't want to stop render while we wait for perf
  );

  const theme = useTheme();

  return (
    <AppWrapper className={theme}>
      <AppCheckProvider sdk={appCheck}>
        <AuthProvider sdk={auth}>
          <SuspenseWithPerf
            traceId="firebase-user-wait"
            fallback={<LoadingOverlay />}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/auth" element={<AuthLand />} />
              </Routes>
              <AuthHandle>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </AuthHandle>
            </BrowserRouter>
          </SuspenseWithPerf>
        </AuthProvider>
      </AppCheckProvider>
    </AppWrapper>
  );
}
