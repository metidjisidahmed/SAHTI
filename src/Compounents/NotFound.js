import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Loader from 'react-loader-spinner';

const useStyles = makeStyles(theme => ({
  marginAutoContainer: {
    /* width: 500,
    height: 80, */
    display: 'flex',
    alignItems : 'center', 
    justifyContent : 'center', 
    /* backgroundColor: 'gold', */
    margin : '4rem',
    //width : '100%',
  },
  text_blod : {
    fontWeight: 900 ,
  }
}));


const NotFound = () => {
  const classes = useStyles();
  return (
      <Grid item xs={12} md={12} lg={12}   >
        {/* <Card raised className={classes.marginAutoContainer}>
          <CardContent> */}
            <Typography  align="center" variant="h1" className={classes.text_blod}  gutterBottom  color="error">
              404
            </Typography>
            <Typography  align="center"  gutterBottom   >
              <Loader
                type="Puff"
                color="#fa3838"
                height={100}
                width={100}
                //timeout={3000} //3 secs
              />
            </Typography>
            <Typography  align="center" variant="h1" gutterBottom  color="error">
              PAGE NOT FOUND   
            </Typography>
           
         {/*  </CardContent>
        </Card> */}
      </Grid>                
  )
};

export default NotFound
