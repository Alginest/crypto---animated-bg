import {
  AppBar,
  Container,
  Link,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context";
import BitCoinLogo from "../../images/BTC_Logo.svg";
import useStyles from "./style";
const Navbar = () => {
  const [switchState, setSwitchState] = React.useState(false);
  const classes = useStyles();
  const { dark, setDark } = useGlobalContext();
  const handleChange = () => {
    setSwitchState(!switchState);
    setDark(!dark);
  };

  return (
    <section className={classes.header}>
      <AppBar
        color="transparent"
        position="fixed"
        elevation={0}
        className={classes.AppBar}
      >
        <Container className={classes.bigCont}>
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.logo} color="secondary" variant="h4">
              <img src={BitCoinLogo} alt="" className={classes.img} />
              <Typography
                variant="h4"
                component="span"
                style={{ marginLeft: 5 }}
              >
                icon
              </Typography>
            </Typography>
            <div className={classes.list}>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/about"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Service
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Shop
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Blog
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </div>
            <Switch
              checked={switchState}
              onChange={handleChange}
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
              }}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  );
};

export default Navbar;
