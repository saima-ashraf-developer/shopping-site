
import React , {useState} from 'react';
import {AppBar, TextField, InputBase, Paper,Avatar} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {useHistory} from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/saima-ashraf-developer/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
 
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: 'Pattaya',
    fontSize: 25,
  },
  link: {
    margin: theme.spacing(3, 2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  body:{
    backgroundImage: 'linear-gradient(to right, orange, #ffd54f, yellow)'
},
avatar:{
  marginLeft: theme.spacing(15),
  marginTop: theme.spacing(15),
  marginBottom: theme.spacing(5),
},
button:{
  borderRadius: 50,
  marginLeft: theme.spacing(6),
  marginTop: theme.spacing(15),
},
paper:{
    width: 700,
    height: 500,
    margin: '20px 0 ',
    background: 'white',
    marginRight: 0,
    textAlign: 'center',
    textIndent: '.1em',
    content: '',
    borderRadius: '40%  5% 5% 40%',
},
form: {
  width: '100%',
  paddingTop: theme.spacing(8),
},
}));


const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  }
  
];

const Signuppage=(props)=> {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const [state, setState]= useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    email1: '',
    password1: '',
    confirmpassword: '',
    username: ''
  });
  const history = useHistory();

  const loginHandler=()=>{  
      history.push('/login-page')
    }
    const changeHandler=(e)=>{
        const {id, value} = e.target
        setState(prevState=>({
          ...prevState,
          [id]: value
    
        }))
      }
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    
  return (
    <React.Fragment>
       <AppBar position="static"  elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" color="inherit" className={classes.toolbarTitle}>
            Jumbo Beta
          </Typography>
          <div className={classes.nav}>
          <nav  >
          <InputBase
            variant="outlined"
          
            style={{padding: 0, backgroundColor: 'white', color: 'black',border: '1px solid #ff5722', textAlign: 'center'}}
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={state.email}
            onChange={changeHandler}
          />
              
          <InputBase
            variant="outlined"
            margin="normal"
            required
            style={{padding: 0, backgroundColor: 'white', color: 'black', marginLeft: 5, border: '1px solid #ff5722'}}
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={changeHandler}
          />
           <Button href="#" color="inherit" variant="outlined" className={classes.link} onClick={loginHandler}>
            Log In
          </Button>
          </nav>
         
          </div>
        </Toolbar>
      </AppBar>
     <div className={classes.body}>
      <Container>
       <Grid  container >
          <Grid item md={6}>
          <Avatar src='/favicon.ico' className={classes.avatar} />
            <Typography variant="h5" color="inherit" className={classes.toolbarTitle}>
              Welcome To Jambo Beta
            </Typography>
            <Typography variant='h7' className={classes.text}>
            <span >We are here to make your dreams true, just
               login and purchase your
               favourite one.</span>  
            </Typography>
            <Button variant='contained' className={classes.button} size='large'>
              Login
            </Button>
          </Grid>
          <Grid item md={6}>
          <Paper className={classes.paper}>
      <form >
        <div className={classes.form}>
          <Typography variant="h6" color="primary" className={classes.toolbarTitle}>
              Register For Signin
          </Typography>
          <TextField
            variant="outlined"
            style={{margin: 15}}
            required
            id="firstname"
            label="First Name"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            value={state.firstname}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            style={{margin: 15}}
            required
            name="lastname"
            label="Lastname"
            type="lastname"
            id="lastname"
            autoComplete="current-lastname"
            value={state.lastname}
            onChange={changeHandler}
          />
           <TextField
            variant="outlined"
            style={{margin: 15}}
            required
            id="email1"
            label="Email Address"
            name="email1"
            autoComplete="email1"
            autoFocus
            value={state.email1}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            style={{margin: 15}}
            required
            name="password1"
            label="Password"
            type="password1"
            id="password1"
            autoComplete="current-password1"
            value={state.password1}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            style={{margin: 15}}
            required
            id="confirmpassword"
            label="Confirm Password "
            name="confirmpassword"
            autoComplete="confirmpassword"
            autoFocus
            value={state.confirmpassword}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            style={{margin: 15}}
            required
            name="username"
            label="User Name"
            type="username"
            id="username"
            autoComplete="current-username"
            value={state.username}
            onChange={changeHandler}
          />
          </div>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{paddingLeft: 70}} row>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
         </RadioGroup>
          <Button variant='contained'color='primary' size='large'>Register</Button>
       </form>
       </Paper>
     </Grid>
     </Grid>
    </Container>
   </div>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="Primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
export default Signuppage;

