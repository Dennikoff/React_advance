import "./styles/index.scss";
import { useTheme } from "./provider/ThemeProvider/lib/ThemeContext";
import { classNames } from "@/shared/lib";
import { AppRouter } from "./provider/router";
import { Navbar } from "@/widgets/Navbar";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
