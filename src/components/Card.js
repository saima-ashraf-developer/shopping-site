import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(3),
    },
    palette:{
        
    }
}))


export default function SearchBar(){
    const classes = useStyles()  
   
       return(
          <Container className={classes.root}>
              <Card style={{ maxWidth: 230 }}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="180"
        image="https://i.pinimg.com/originals/d1/a4/b8/d1a4b8e7f09e3ef69c82da716e613a6a.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" color="text.warning.main">
          Price: $200
        </Typography>
        <Typography variant="body2" color="text.secondary">
          100 Degrees<br />
          24-k Gold Plast
        </Typography>
      </CardContent>
      <Button color='warning' variant='contained' startIcon={<ShoppingCartIcon />} >ADD to Cart</Button>
      <CardActions style={{flexGrow: 1}}>
       
        <Button size="small" >Share</Button>
        <Button size="small" >Learn More</Button>
      </CardActions>
    </Card>
          </Container>
       )
}
