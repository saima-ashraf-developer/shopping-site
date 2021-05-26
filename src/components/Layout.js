import { Typography, AppBar, Toolbar, Avatar, makeStyles, Fab } from '@material-ui/core';
import React from 'react';
import Drawer from './Drawer';
import Searchbar from './Searchbar';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';


const useStyles=makeStyles((theme)=>{
    return{
    avatar:{
        marginLeft: theme.spacing(8)
    },
    text:{
        
        fontSize: 25,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(30)
    },
    textfont: {
        fontFamily: 'Pattaya',
    },
    spacing: {
        
        marginLeft: theme.spacing(5)
    },
    flex:{
        marginLeft: theme.spacing(45),
        marginRight: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
    appbar:{
        zIndex: theme.zIndex.drawer + 1
    }
}
})

export default function Layout(){
    const classes= useStyles()
    return(
        <div>
        <AppBar className={classes.appbar}>
            <Toolbar>
                <Typography variant='h6'>Select Catagory</Typography>
                <AssignmentOutlinedIcon fontSize="large"/> 
                <Avatar src='/favicon.ico' className={classes.avatar} />
                <div className={classes.text} >
                    <Typography variant= 'h5' className={classes.textfont}>jumbo!</Typography>
                    <Typography className={classes.textfont}>Beta</Typography>
                </div>
                <Typography variant='h6' className={classes.spacing}>Home</Typography>
                <Typography variant='h6' className={classes.spacing}>New Products</Typography>
                <Typography variant='h6' className={classes.spacing}>Blog</Typography>
                <div  >
                <ShoppingCartIcon fontSize="large" className={classes.flex} />
                <Fab color="primary" aria-label="add" >
                    <AddIcon style={{ fontSize: 30 }}/>
                </Fab>
                </div>

            </Toolbar>
        </AppBar>
       
       
        <div>
        <Drawer />
           <Searchbar />
        </div>
        </div>
    )
}