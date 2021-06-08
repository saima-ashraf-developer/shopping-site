import {
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  makeStyles,
  Fab,
} from "@material-ui/core";
import React from "react";
import Drawer from "./Drawer";
import Searchbar from "./Searchbar";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      marginLeft: theme.spacing(8),
    },
    text: {
      fontSize: 25,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(30),
    },
    textfont: {
      fontFamily: "Pattaya",
    },
    spacing: {
      marginLeft: theme.spacing(5),
    },
    flex: {
      marginLeft: theme.spacing(45),
      marginRight: theme.spacing(5),
      marginTop: theme.spacing(2),
    },
    appbar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
    },
  };
});

export default function Layout() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  class Parents {
    constructor(name, address){
      this.name = name;
      this.address = address;
    }
  }

  class Students extends Parents {
    constructor(name, marks, rollno, address){
      super(name, address)
      this.Marks = marks;
      this.Rollno = rollno;
      
    }
  }
  
  const student = new Students('sam',40, 5, 'st#9 lhr');
  const parent = new Parents('ashraf', 'str#1, lahore')
  
  // console.log(`${Students.name} is son of ${Parents.name} and his age is ${Students.age}, he lives in ${Parents.address}`)
    console.log(student)
    console.log(parent)

    var person = {
      fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
      }
    }
    var person1 = {
      firstName:"John",
      lastName: "Doe"
    }
    const aa = person.fullName.call(person1, "Oslo", "Norway");
    
    console.log(aa)
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6">Select Catagory</Typography>
          <AssignmentOutlinedIcon fontSize="large" />
          <Avatar src="/favicon.ico" className={classes.avatar} />
          <div className={classes.text}>
            <Typography variant="h5" className={classes.textfont}>
              jumbo!
            </Typography>
            <Typography className={classes.textfont}>Beta</Typography>
          </div>
          <Typography variant="h6" className={classes.spacing}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.spacing}>
            New Products
          </Typography>
          <Typography
            variant="h6"
            className={classes.spacing}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            Blog
          </Typography>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography color='primary'>Open the Blog Content</Typography>
          </Popover>
          <div>
            <ShoppingCartIcon fontSize="large" className={classes.flex} />
            <Fab color="primary" aria-label="add">
              <AddIcon style={{ fontSize: 30 }} />
            </Fab>
          </div>
        </Toolbar>
      </AppBar>

      <div>
        <Drawer />
        <Searchbar />
      </div>
    </div>
  );

  // class App extends React.Component {
    //   constructor() {
    //     students = {
    //       name: "",
    //       class: "",
    //       rollno: "",
    //       address: "",
    //       marks: "",
    //     };
    //   }
    
    //   render() {
    //     return <div></div>;
    //   }
    // }
    
}
