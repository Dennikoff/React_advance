import "./styles/index.scss";
import { useTheme } from "./provider/ThemeProvider/lib/ThemeContext";
import { classNames } from "@/shared/lib";
import { AppRouter } from "./provider/router";
import { Navbar } from "@/widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>TOGGLE</button>

      <AppRouter />
    </div>
  );
};
