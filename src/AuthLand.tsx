import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
  TwitterAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useSigninCheck } from "reactfire";
import { styled } from "stitches.config";

import { ReactComponent as GoogleIcon } from "./assets/svg/GoogleIcon.svg";
import Card from "./components/common/Card";
import Center from "./components/common/Center";
import { useDarkModeState } from "./components/contexts/ThemeContextProvider";
import IconButton from "./components/IconButton";
import Spinner from "./components/Spinner";
import ToggleTheme from "./components/ToggleThemeButton";
import { SignInFormProps } from "./util/component-props";

const SignInForm = ({ status }: SignInFormProps) => {
  const auth = useAuth();

  const TwitterIconButton = styled(IconButton, {
    backgroundColor: "$twitter",
    color: "$twitterA",
    borderColor: "transparent",
    "&:hover": { backgroundColor: "$twitterHover" },
    "&:active": { backgroundColor: "$twitterActive" },
  });
  const GoogleIconButton = styled(IconButton, {
    backgroundColor: "$google",
    color: "$googleHiC",
    borderColor: "transparent",
    "&:hover": { backgroundColor: "$googleHover" },
    "&:active": { backgroundColor: "$googleActive" },
  });
  const GithubIconButton = styled(IconButton, {
    backgroundColor: "$github",
    color: "$githubHiC",
    borderColor: "transparent",
    "&:hover": { backgroundColor: "$githubHover" },
    "&:active": { backgroundColor: "$githubActive" },
  });

  const providers = new Map(
    Object.entries({
      twitter: new TwitterAuthProvider(),
      github: new GithubAuthProvider(),
      google: new GoogleAuthProvider(),
    })
  );

  const signIn = (prov: "twitter" | "github" | "google") => {
    const provider = providers.get(prov);
    if (provider) signInWithRedirect(auth, provider);
  };

  if (status === "loading") return <Spinner />;
  return (
    <>
      <TwitterIconButton
        leftIcon={TwitterLogoIcon}
        text="Sign in with Twitter"
        aria-label="Sign in with Twitter"
        onClick={() => signIn("twitter")}
      />
      <GithubIconButton
        leftIcon={GitHubLogoIcon}
        text="Sign in with GitHub"
        aria-label="Sign in with GitHub"
        onClick={() => signIn("github")}
      />
      <GoogleIconButton
        leftIcon={GoogleIcon}
        text="Sign in with Google"
        aria-label="Sign in with Google"
        onClick={() => signIn("google")}
      />
    </>
  );
};

export default function AuthLand() {
  const [darkMode, setDarkMode] = useDarkModeState();
  const { status, data: signInCheckResult } = useSigninCheck();
  const navigate = useNavigate();

  useEffect(() => {
    if (signInCheckResult.signedIn) navigate("/");
  }, [signInCheckResult]);

  return (
    <Center>
      <Card>
        <ToggleTheme
          defaultPressed={darkMode}
          onPressed={(p) => setDarkMode(p)}
        />
        <SignInForm status={status} />
      </Card>
    </Center>
  );
}
