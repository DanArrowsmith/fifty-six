import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MobileNav from '../components/MobileNav';
import Menu from '../components/Menu';
import logo from "./site-logo.svg" // Tell Webpack this JS file uses this image
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    alignSelf: 'flex-end',

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
  },
  link: {
    maxHeight: "20px",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
    <div className={classes.container}>
          
          <img className={classes.logo} src={logo} alt="Fifty Six" sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 800px"/>
        
          <MobileNav className={classes.menuButton} />
          <Menu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
