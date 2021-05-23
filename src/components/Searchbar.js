import React from 'react';
import Card from './Card';
import {InputBase, Container, List, Avatar, Typography, ButtonGroup,Button, Input} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles , fade} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
     
      marginTop: 100,
     
    },
    input:{
        width: '100%',
        height: '100%',
        borderWidth: 5,
        paddingLeft: '2rem',
      position: 'relative',


    },
    search:{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(5),
        marginBottom: theme.spacing(3),
        borderColor: "red",
        borderWidth: 5,
        padding: 15,
       
    },
    image:{
        height: '50% ',
        width: '100%',
        borderColor: "red",
        borderWidth: 4,
        borderRadius: 10
    },
    cards:{
      position: 'relative',
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(5),
      marginBottom: theme.spacing(3),
      marginTop: 100,
      flexGrow: 1,    
    },
    mainSearch: {
      position: 'relative',
      border: 'red',
      padding: 10
    },
    subSearch: {
      position: 'absolute',
      height: '100%',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }));



export default function SearchBar(){
 const classes = useStyles()  

    return(
  <Container >
     <div className={classes.root}>
         <Grid container >
            <Grid item xs={6} className={classes.paper}>
             <Paper component="form" style={{ display: 'flex',  border: "1px solid red"}}>
             <InputBase
                style={{flexGrow: 1 , padding: 15,}}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton type="submit" aria-label="search" color="primary" style={{backgroundColor: 'red'}} >
                <SearchIcon />
              </IconButton>
             </Paper>
              <div style={{marginTop: '2rem'}}>
                <img
                    className={classes.image}
                    src='https://c.ndtvimg.com/2020-10/bc5nbv6o_breakfast_650x400_01_October_20.jpg'
                />
                </div>
           </Grid>
        <Grid item xs={6}>
          <Paper className={classes.cards} elevation={0}>
         
            <List row style={{display: 'flex'}} > 
                <ListItem>
                  <ListItemIcon >
                    <Avatar>
                     <MailOutlineOutlinedIcon />
                    </Avatar>
                </ListItemIcon>
                  <ListItemText variant= 'h6'
                    primary="Email:info@jumbo.com"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon >
                    <Avatar >
                     <PhoneInTalkOutlinedIcon />
                    </Avatar>
                </ListItemIcon>
                  <ListItemText variant= 'h6'
                    primary="Hotline: 021-11-11-jumbo(52626)"/>
                </ListItem>
            </List>
                    <div style={{ display: 'flex'}}>
                      <Typography style={{flexGrow: 1}}>HOT DEALS</Typography>
                      <ButtonGroup >
                        <Button><NavigateBeforeIcon /></Button>
                        <Button><NavigateNextIcon /></Button>
                      </ButtonGroup>
                      
                    </div>
             <Box style={{ width: '100%' , marginTop: 10}}>
              <LinearProgress variant="determinate" value={30} />
             </Box>
             <Card />
          </Paper>
        </Grid>
     </Grid>
     </div>
 </Container>
    )
}




