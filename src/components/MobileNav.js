import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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

        <IconButton  onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)} edge="start" className={classes.closeButton} color="inherit" aria-label="close">
          <CloseIcon />
        </IconButton>

          <ExpansionPanel elevation={0} className={classes.expansionPanel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.expansionPanel}
              classes={{content: classes.expansionPanelSummary}}
            >
              <Button className={classes.expansionPanelButton}
              onClick={toggleDrawer(side, false)}
              onKeyDown={toggleDrawer(side, false)}>
                Dive With Us
              </Button>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{root:classes.panel}}>
              <List>
              <ListItem
              classes={{root:classes.listItem}}
              >
              <Button
              onClick={toggleDrawer(side, false)}
              onKeyDown={toggleDrawer(side, false)}
              >
              Discover Scuba
              </Button>
              </ListItem>
              <ListItem
              classes={{root:classes.listItem}}
              >
              <Button
              onClick={toggleDrawer(side, false)}
              onKeyDown={toggleDrawer(side, false)}
              >
              PADI Open Water
              </Button>
              </ListItem>
              <ListItem
              classes={{root:classes.listItem}}
              >
              <Button
              onClick={toggleDrawer(side, false)}
              onKeyDown={toggleDrawer(side, false)}
              >
              PADI Advanced
              </Button>
              </ListItem>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>

<Divider />

          <ExpansionPanel
          className={classes.expansionPanel} elevation={0}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className={classes.expansionPanel}
            >
              <Button className={classes.expansionPanelButton}
              onClick={toggleDrawer(side, false)}
              onKeyDown={toggleDrawer(side, false)}>
              Pro Training
              </Button>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{root: classes.panel}}>
              <List>
              <ListItem
              classes={{root:classes.listItem}}
              >
                <Button
                onClick={toggleDrawer(side, false)}
                onKeyDown={toggleDrawer(side, false)}
                >
                  Rescue Diver
                  </Button>
                </ListItem>
                <ListItem
                classes={{root:classes.listItem}}
                >
                <Button
                onClick={toggleDrawer(side, false)}
                onKeyDown={toggleDrawer(side, false)}
                >
                  Specialities
                  </Button>
                </ListItem>
                <ListItem
                classes={{root:classes.listItem}}
                >
                <Button
                onClick={toggleDrawer(side, false)}
                onKeyDown={toggleDrawer(side, false)}
                >
                  Divemaster
                  </Button>
                </ListItem>
              </List>
              </ExpansionPanelDetails>
          </ExpansionPanel>


          <List classes={{padding: classes.listPadding}}>
          <Divider />
          <ListItem
          classes={{root:classes.listItem}}
          >
          <Button
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
          >
          Fun Diving
          </Button>
          </ListItem>
                <Divider />
                <ListItem
                classes={{root:classes.listItem}}
                >
          <Button
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
          >
          Freediver
          </Button>
          </ListItem>
                <Divider />
                <ListItem
                classes={{root:classes.listItem}}
                >
          <Button
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
          >
          Articles
          </Button>
          </ListItem>
                <Divider />
                <ListItem
                classes={{root:classes.listItem}}
                >
          <Button
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
          >
          Gallery
          </Button>
          </ListItem>
                <Divider />
                <ListItem
                classes={{root:classes.listItem}}
                >
          <Button
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
          >
          Contact Us
          </Button>
          </ListItem>
                <Divider />
          <ListItem>
          <div className={classes.socialbar}>
          <FacebookIcon color='secondary'/>
          <InstagramIcon color='secondary'/>
          <YouTubeIcon color='secondary'/>
          </div>
          </ListItem>
          </List>

        </div>

      //end of menu
    //</div>
  );




  return (
    <div className={classes.mobilenav}>

      <IconButton onClick={toggleDrawer('right', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
