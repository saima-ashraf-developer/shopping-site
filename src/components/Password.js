import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import { Backdrop, CardActions, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/saima-ashraf-821a7a208/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    marginLeft: theme.spacing(35),
    width: theme.spacing(7),
    height: theme.spacing(7),
    
  },
  card: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  flexGrow:1
  },
}));

export default function Loginpage() {
  const classes = useStyles();
  const [open, setOpen] = useState(true)
  const [error, setError] = useState(null);
  const history= useHistory();
  const [state, setState]= useState({
    email: '',
    password: '',
    confirmpassword: ''
  });
 

  const submitHandler=(e)=>{
    console.log(state.email, state.password)
    e.preventDefault();
        // if(state.password === state.confirmpassword) {
        //  history.goBack()
        // } else {
        //     setError('Passwords do not match');
        // }
  }
  const changeHandler=(e)=>{
    const {id, value} = e.target
    setState(prevState=>({
      ...prevState,
      [id]: value

    }))
  }
  const clickhandle=()=>{
    setOpen(false)
  }

  return (
    <Container component="main" >
  
      <div className={classes.paper}>
          <Card>
          <CardActionArea onClick={clickhandle}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <CardContent>
        <Typography component="h1" variant="h5" color='primary'>
          Password Resetting
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={state.email}
            onChange={changeHandler}
            error={error}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="newpassword"
            label="New Password"
            type="password"
            id="newpassword"
            autoComplete="current-password"
            value={state.password}
            onChange={changeHandler}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmpassword"
            label="Confirm Password"
            type="password"
            id="confirmpassword"
            autoComplete="current-password"
            value={state.confirmpassword}
            onChange={changeHandler}
          />
        
         </CardContent>
          <CardActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
          Reset Password
          </Button>
          <Grid container>
            <Grid item>
            <small>  <Link href="http://localhost:3000/login-page" >
                {"Back to my app"}
              </Link>
              </small>
            </Grid>
          </Grid>
          </CardActions>
          </CardActionArea>
        </Card>
      </div>
      <Backdrop open={open} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
