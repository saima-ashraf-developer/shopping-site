import React ,{useState} from 'react';
import { Component } from 'react';
import {Drawer, List, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';


const drawerWidth= 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 5,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}))

export default function Shopping(){

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [listItems, setListItems] = useState(['Inbox', 'Starred', 'Send Mail', 'Drafts'])

  const handleClick=()=>{
    console.log('the button is clicked ')
    setOpen(!open)
  }
    
    return(
      // <div>Something is going to happen</div>
      // <div>
      //   <Drawer
      //   className={classes.drawer}
      //   variant="permanent"
      //   anchor="left"
      //   >
      //     <div className={classes.toolbar}/>
      //     <List>
      //       {
      //         listItems.map((item, index) => {
      //           return (
      //             <ListItem
      //               key={index}
      //               button
      //               onClick={handleClick}
      //             >
      //               <ListItemIcon >{index == 2 ? <InboxIcon  /> : <MailIcon />}</ListItemIcon>
      //               <ListItemText primary={item}/>
      //               <NavigateNextIcon fontSize="small"/>
      //             </ListItem>
      //           )
      //         })
      //       }
      //       <Collapse in={open} timeout="auto" unmountOnExit>
      //   <List component="div" disablePadding>
      //     <ListItem button className={classes.nested}>
      //       <ListItemIcon>
      //         <StarBorder />
      //       </ListItemIcon>
      //       <ListItemText primary="Starred" />
      //     </ListItem>
      //   </List>
      // </Collapse>
      //     </List>

      //   </Drawer>
      // </div>
        <div>
       
       <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts', 'what the hell'].map((text, index) => (
            <div>
            <ListItem button onClick={handleClick}  key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
              <NavigateNextIcon fontSize="small" />
            </ListItem>
            <Divider />
            </div>
            
          ))}
        </List>
        <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <List>
        <ListItem button >
          <ListItemIcon>
            <PhoneIphoneOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Phones' />
          <NavigateNextIcon fontSize="small" />
        </ListItem>
      </List>
      </Drawer>
        </div>
    )
}