import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Typed from 'react-typed'
import IconButton from '@material-ui/core/IconButton';
import { GitHub, LinkedIn } from '@material-ui/icons';
 
const useStyle = makeStyles(theme => ({
  title: {
    color: "tomato"
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },


  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  },
  
  socialButton: {
    color: '#fff',
    fontSize: '36px',
    transition: 'all 250ms ease-in-out',
    '&:hover': {
        color: '#676767',
    },
  }
}));

const Header = () => {
  const classes = useStyle();
  return (
    <Box className={classes.typedContainer}>
      <Typography className={classes.title} variant="h3">
        <Typed strings={["Jose Perez."]} typeSpeed={30} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h4">
        <Typed
          strings={[
            "Full-Stack Web Developer",
            "Front End Developer",
            "Software Engineer"
          ]}
          typeSpeed={30}
          backSpeed={60}
          loop
        />
      </Typography>

      <Box className='ghLink'>
        <IconButton className={classes.socialButton} onClick={() => window.open('https://github.com/pjose92')}>
          <GitHub fontSize='inherit' />
        </IconButton>
        <IconButton className={classes.socialButton} onClick={() => window.open('https://www.linkedin.com/in/jose-perez-guerrero-b7a50b175/')}>
          <LinkedIn fontSize='inherit' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Header;
