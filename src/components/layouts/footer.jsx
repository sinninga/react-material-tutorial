import React, { Component } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { positions, players } from '../../store.js';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      positions: { positions }
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper >
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label='All'/>
          {positions.map(position =>
            <Tab label={position} />
            )}
        </Tabs>
      </Paper>
    );
  }
};

export default Footer;
