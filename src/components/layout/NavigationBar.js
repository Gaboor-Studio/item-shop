import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import shop from "../../assets/picture/cart2.png";

const NavigationBar = () => {
  return (
    <header className={classes.navbar}>
      <nav>
        <Link to="/" className={classes.home}>
          گبور شاپ
        </Link>
        <div className={classes.navbarimg}>
          <Link className={classes.shop} to="/cart">
            <img src={shop} className={classes.navbarimg} alt="" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
