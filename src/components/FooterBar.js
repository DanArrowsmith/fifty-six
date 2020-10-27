import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FooterNav from '../components/FooterNav';
import Menu from '../components/Menu';
import Cart from '../components/Cart';
import logo from "./padi-logo.svg" // Tell Webpack this JS file uses this image

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  footerBar:{
    top:'auto',
    bottom:0,
  },

  menuButton: {
    alignSelf: 'flex-start',

  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  logo: {
    maxWidth: "220px",
    marginBottom: 0,
  },
  container: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.footerBar}>
        <Toolbar>
    <div className={classes.container}>
    <Cart className={classes.menuButton} />
        <img className={classes.logo} src={logo} alt="Fifty Six" sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 800px"/>
          <FooterNav className={classes.menuButton} />
          <Menu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
