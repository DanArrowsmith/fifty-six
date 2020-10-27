// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import DiveWithUs from '../components/DiveWithUs';
// import GoPro from '../components/GoPro';
//
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
//   list: {
//     width: 250,
//   },
//   menu:{
//     display: 'flex',
//     '@media (max-width:820px)':{
//       display: 'none',
//     },
//   },
//   downArrow: {
//     minWidth: '1px',
//   },
//
// }));
//
//
// const Menu = () => {
//   const classes = useStyles();
//   return (
//     <>
//     <div className={classes.menu }>
//     <Button>Dive With Us</Button>
//     <Button><DiveWithUs /></Button>
//
//     <Button>
//     Go Pro!
//     </Button>
//     <Button classes={{root: classes.downArrow}}><GoPro /></Button>
//     <Button>
//   Fun Diving
//     </Button>
//     <Button>
//     Freediver
//     </Button>
//     <Button>
//     Gallery
//     </Button>
//     <Button>Blog
//     </Button>
//     <Button>
//     Contact Us
//     </Button>
//
//     </div>
//     </>
//   )
// }
//
// export default Menu

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menu:{
    '@media (max-width:820px)':{
    display: 'none',}
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        wrapped="true"
        className={classes.menu}
      >
        <Tab label="Dive With Us" />
        <Tab label="Go Pro!" />
        <Tab label="Fundiving" />
        <Tab label="Freediver" />
        <Tab label="Articles" />
        <Tab label="Contact Us" />
      </Tabs>
  );
}
