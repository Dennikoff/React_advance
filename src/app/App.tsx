import "./styles/index.scss";
import { useTheme } from "./provider/ThemeProvider/lib/ThemeContext";
import { classNames } from "@/shared/lib";
import { AppRouter } from "./provider/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar/Sidebar";
import classes from "./styles/App.module.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className={classes.appContainer}>
        <Sidebar />
        <div className={classes.pageWrapper}>
          <AppRouter />
        </div>
      </div>
    </div>
  );
};
