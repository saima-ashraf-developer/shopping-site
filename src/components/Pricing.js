
import React , {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {useHistory, useLocation } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: 'Pattaya',
    fontSize: 25,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
      marginBottom: 50
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
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
  },
];

export default function Pricing() {
  const classes = useStyles();


  const [items, setItems] = useState([
    {
      title: 'Delivery Free',
  
      description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
      action:false
    },
    {
      title: 'Upcomings',
      subheader: 'Most popular',
     
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'outlined',
      action:false
    },
    {
      title: 'For Booking',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
      action:false
    },
  ]);




  const [actions, setAction] = useState([
    {
      index: 0,
      action:false
    },
    {
      index: 1,
      action:false
    },
    {
      index: 2,
      action:false
    }
  ]);
  const history = useHistory();
  const location = useLocation();

    const clickHandler=(key, index)=>{

      if(items.title == key){
        const s = items[index].action
        setItems(items[index].action == true)
      }
     
  
    }


    const loginHandler=()=>{
     
      history.push('/login-page')
      // <Link to={location => ({ ...location, pathname: "/login-page" })} />
    }

    console.log(actions)

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static"  elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" className={classes.toolbarTitle}>
            Jumbo Beta
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="inherit" variant="outlined" className={classes.link} onClick={loginHandler}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom id="transition-modal-title">
          Price Of Products 
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p" id="transition-modal-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {items.map((item, index) => {
            console.log(item)

            
            return (
            <Grid item key={item.title} xs={12}  md={4}  onClick={()=>clickHandler(item.title, index)}>
              <Card  >
                <CardHeader
                  title={item.title}
                  subheader={item.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={item.action ? <StarIcon /> : ''}
                  className={classes.cardHeader}
                />
                <CardContent>
                 
                  <ul>
                    {item.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions >
                  <Button fullWidth variant={item.buttonVariant} color="primary" >
                    {item.buttonText}
                  </Button>``
                </CardActions>
              </Card>
            </Grid>
          )})}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
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

