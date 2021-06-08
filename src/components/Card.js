import React, {useState} from 'react';
import Pricing from './Pricing';
import { makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {useHistory} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(3),
      display: 'flex',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
   
}))


export default function SearchBar(){
    const classes = useStyles();
    const history = useHistory();
  const [open, setOpen] = React.useState(false);

   

    const clickHandler=()=>{
        setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const pricepageHandler=()=>{
      history.push('/pricing-page')
    }
       return(
          <div className={classes.root}>
     <Card style={{ maxWidth: 230 }} variant='outlined' >
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="180"
        image="https://i.pinimg.com/originals/d1/a4/b8/d1a4b8e7f09e3ef69c82da716e613a6a.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" color="primary">
          Price: $200
        </Typography>
        <Typography variant="body2" color="text.secondary">
          100 Degrees<br />
          24-k Gold Plast
        </Typography>
      </CardContent>
      <Button color='primary' variant='contained' startIcon={<ShoppingCartIcon />} onClick={pricepageHandler} fullWidth >ADD to Cart</Button>
      <CardActions style={{flexGrow: 1, display: 'block'}}>
       
        <Button size="small" variant='outlined' onClick={clickHandler} >{<FavoriteBorderOutlinedIcon />}</Button>
        <Button size="small" variant='contained' color='primary' >{<BarChartOutlinedIcon />}</Button>
      </CardActions>
    </Card>
    <Card style={{ maxWidth: 230, marginLeft: 30 }} variant='outlined'>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="180"
        image="https://5.imimg.com/data5/FB/OV/MY-32392410/designer-double-bed-500x500.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" color="primary">
          Price:$500   
        </Typography>
        <Typography variant="body2" color="text.secondary">
          LG<br />
          GC-151sa
        </Typography>
      </CardContent>
      <Button color='primary' variant='contained' startIcon={<ShoppingCartIcon />} onClick={pricepageHandler} >ADD to Cart</Button>
      <CardActions style={{flexGrow: 1, display: 'block'}}>
       
        <Button size="small" variant='outlined' onClick={clickHandler} >{<FavoriteBorderOutlinedIcon />}</Button>
        <Button size="small" variant='contained' color='primary'>{<BarChartOutlinedIcon />}</Button>
      </CardActions>
    </Card>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       <div className={classes.paper}>
            <h2 id="transition-modal-title">want To Purchase</h2>
            <p id="transition-modal-description">Click on Add to cart.</p>
          </div>
      </Modal>
 </div>
       )
}
