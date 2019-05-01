import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container>
        <Grid item>
          Left Grid
        </Grid>
        <Grid item>
          Right Grid
        </Grid>
      </Grid>
    );
  }
};

export default Body;
