import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import  NavLink  from "react-router-dom/NavLink";


let useStyles = makeStyles({
  imgsize: {
    height: 30,
    width: 30,
  },
  btncolor: {
    color: "white",
  },
});

function Header(props) {
  let classes = useStyles();
  return (
    <div>
      <Grid container>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Grid item xs={1}>
              <Button variant="text" color="default" 
              exact
              to="/"
              component={NavLink}
              variant="text"              
              >
              {<img src="logo512.png" className={classes.imgsize} />}
              </Button>
            </Grid>

            <Grid item xs={1}>
              <Button
                exact
                to="/"
                component={NavLink}
                variant="text"
                startIcon={<HomeIcon />}
                className={classes.btncolor}
              >
                Home
              </Button>
            </Grid>

            <Grid item xs={1}>
              <Button
                exact
                component={NavLink}
                to="/menu"
                variant="text"
                startIcon={<ContactMailIcon />}
                className={classes.btncolor}
              >
                Menu
              </Button>
            </Grid>

            <Grid item xs={1}>
              <Button
                exact
                component={NavLink}
                to="/about"
                variant="text"
                startIcon={<InfoIcon />}
                className={classes.btncolor}
              >
                About
              </Button>
            </Grid>

            <Grid item xs={1}>
              <Button
                exact
                component={NavLink}
                to="/contact"
                variant="text"
                startIcon={<InfoIcon />}
                className={classes.btncolor}
              >
                Contact
              </Button>
            </Grid>
            <Grid item xs={1} style={{ paddingLeft: 20 }}>
              <Button
                exact
                component={NavLink}
                to="/register"
                variant="text"
                className={classes.btncolor}
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={1} style={{ paddingLeft: 20 }}>
              <Button
                exact
                component={NavLink}
                to="/login"
                variant="text"
                className={classes.btncolor}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <TextField id="seacrh" placeholder="Search...  " />
            </Grid>
            <Grid item xs={2}>
              <IconButton
                aria-label="cart"
                onClick={() => alert("Under Construction")}
              >
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="User">
                <AccountCircleIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Header;
