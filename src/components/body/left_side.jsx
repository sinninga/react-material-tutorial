import React from 'react';
import { Paper } from '@material-ui/core';
import { players } from '../../store.js';

export default ({ styles }) =>
  <Paper style={styles.Paper}>
    {players.map((player => {
      return (
        <h5>{player.name}: {player.description}</h5>
        )
    }))}
  </Paper>
