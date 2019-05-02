import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }

};

export default Header;
