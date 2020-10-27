import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  iconBox:{
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
  },
  listPadding: {
    paddingTop: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expansionPanel: {
    padding : '8px, 16px',
    '&:before':{
      height: 0,
    },
  },
  expansionPanelSummary: {
    marginTop: 4,
    marginBottom: 4,
  },
  expansionPanelButton:{
    paddingLeft: 0,
  },
  list: {
    width: 250,
  },
  mobilenav:{
    '@media (min-width:820px)':{
      display: 'none',
    }
  },
  socialbar:{
    display:'flex',
    justifyContent: 'space-evenly',
    width:'100%',
    paddingTop: '10px',
  },
  closeButton:{
    marginLeft: 0,
    alignSelf:'flex-end',
  },
  panel:{
    backgroundColor: '#F5F5F5',
  },
  listItem:{
    marginBottom: 0,

  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    // <div
    //   className={classes.list}
    //   role="presentation"
    // >
    // start of menu

        <div className={classes.root}>
        <div className={classes.iconBox}>
        <IconButton  onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)} edge="start" className={classes.closeButton} color="inherit" aria-label="close">
          <CloseIcon />
        </IconButton>
        </div>



<Divider />



          <List classes={{padding: classes.listPadding}}>
          <Divider />
          <ListItem
          classes={{root:classes.listItem}}
          >
          <Button
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
          >
          You have no items in your cart yet.
          </Button>
          </ListItem>
                <Divider />

          </List>

        </div>

      //end of menu
    //</div>
  );




  return (
    <div className={classes.mobilenav}>

      <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
  <ShoppingCartIcon />
      </IconButton>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
