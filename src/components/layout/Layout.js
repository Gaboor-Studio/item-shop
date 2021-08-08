import NavigationBar from "./NavigationBar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <NavigationBar />
      <div className={classes.layout}>{props.children}</div>
    </div>
  );
};

export default Layout;
