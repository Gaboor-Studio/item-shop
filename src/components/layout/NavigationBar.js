import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import shop from "../../assets/picture/cart2.png";
import { useState, useEffect } from "react";

const NavigationBar = () => {
  const [scrollState, setScrollState] = useState("top");
  useEffect(() => {
    let listener = null;
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <header className={scrollState==="amir" ? classes.bottomnav : classes.navbar}>
      <nav>
        <Link to="/" className={classes.home}>
          گبور شاپ
        </Link>

        <Link className={classes.shop} to="/cart">
          <img src={shop} className={classes.navbarimg} alt="" />
        </Link>
      </nav>
    </header>
  );
};

export default NavigationBar;
