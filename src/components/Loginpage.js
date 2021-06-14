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

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
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
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Loginpage() {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const history= useHistory();
  const [state, setState]= useState({
    email: '',
    password: ''
  });
 

  const submitHandler=(e)=>{
    console.log(state.email, state.password)
    e.preventDefault();
        if(state.password.length) {
            sendDetailsToServer()    
        } else {
            setError('Passwords do not match');
        }
  }
  const changeHandler=(e)=>{
    const {id, value} = e.target
    setState(prevState=>({
      ...prevState,
      [id]: value

    }))
  }
  const sendDetailsToServer = () => {
    if(state.email.length && state.password.length) {
        setError(null);
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post('https://signinpage-c5629-default-rtdb.firebaseio.com/users', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful. Redirecting to home page..'
                    }))
                    history.goBack();
                    setError(null)
                } else{
                    setError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });    
    } else {
        setError('Please enter valid username and password')    
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={submitHandler} error={error}>
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
          />
               <small id="emailHelp">We'll never share your email with anyone else.</small>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={changeHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Button onClick={()=>{  
                history.push('/forgot-password')
              }} variant="body2">
                Forgot password?
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={()=>{history.push('/sign-up-page')}}>
                {"Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
