import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

class Body extends Component {
  constructor(props) {
    super(props);
  }


  render() {
  const style = {
    Paper: { padding: 20, margin: 10, height: 200 }
  }
    return (
      <Grid container>
        <Grid item sm>
          <Paper style={style.Paper}>
            Left Pane
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={style.Paper}>
            Right Pane
          </Paper>
        </Grid>
      </Grid>
    );
  }
};

export default Body;
