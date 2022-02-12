import Card from "@app/components/common/Card";
import Center from "@app/components/common/Center";
import { useDarkModeState } from "@app/components/contexts/ThemeContextProvider";
import IconButton from "@app/components/IconButton";
import ToggleTheme from "@app/components/ToggleThemeButton";
import { ExitIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useAuth } from "reactfire";

const Home = () => {
  const [darkMode, setDarkMode] = useDarkModeState();
  const auth = useAuth();

  return (
    <Center>
      <Card>
        <ToggleTheme
          defaultPressed={darkMode}
          onPressed={(p) => setDarkMode(p)}
        />
        hello world
        <IconButton
          icon={ExitIcon}
          aria-label="Sign out"
          onClick={() => auth.signOut()}
        />
        <hr />
        <Link to="/about">About</Link>
      </Card>
    </Center>
  );
};
export default Home;
