import React, { useState } from "react";
import { Component } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


const drawerWidth = 240;

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
}));

export default function Shopping() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [listItems, setListItems] = useState([
    "Inbox",
    "Starred",
    "Send Mail",
    "Drafts",
  ]);

  const handleClick = () => {
    console.log("the button is clicked ");
    setOpen(!open);
  };

  return (
    <div>
     
      <Drawer className={classes.drawer} variant="permanent" anchor="left">
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {listItems.map((text, index) => (
            <div>
              <ListItem button onClick={handleClick} key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
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
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
        >
          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
            <TreeItem nodeId="3" label="Chrome" />
            <TreeItem nodeId="4" label="Webstorm" />
          </TreeItem>
        </TreeView>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
        >
          <TreeItem nodeId="1" label="categories">
            <TreeItem nodeId="2" label="item1" />
            <TreeItem nodeId="2" label="item2" />
          </TreeItem>
        </TreeView>
      </Drawer>
     
    </div>
  );
}
