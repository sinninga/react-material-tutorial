import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import LeftSide from './left_side';
import RightSide from './right_side';



class Body extends Component {
  constructor(props) {
    super(props);
  }


  render() {
  const styles = {
    Paper: { padding: 20, margin: 10, height: 200 }
  }
    return (
      <Grid container>
        <Grid item sm>
          <LeftSide styles={styles}/>
        </Grid>
        <Grid item sm>
          <RightSide styles={styles}/>
        </Grid>
      </Grid>
    );
  }
};

export default Body;
