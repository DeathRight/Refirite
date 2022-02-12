import Card from "@app/components/common/Card";
import Center from "@app/components/common/Center";
import { useDarkModeState } from "@app/components/contexts/ThemeContextProvider";
import SignOutButton from "@app/components/SignOutButton";
import ToggleTheme from "@app/components/ToggleThemeButton";
import { Link } from "react-router-dom";

const Home = () => {
  const [darkMode, setDarkMode] = useDarkModeState();
  // const auth = useAuth();

  return (
    <Center>
      <Card>
        <ToggleTheme
          defaultPressed={darkMode}
          onPressed={(p) => setDarkMode(p)}
        />
        hello world
        <SignOutButton />
        <hr />
        <Link to="/about">About</Link>
      </Card>
    </Center>
  );
};
export default Home;
