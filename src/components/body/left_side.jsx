import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPlayers } from '../../actions/index';
import styles  from './body';
import { players }  from '../../store.js';


class LeftSide extends Component {
  componentWillMount() {
    this.props.setPlayers();
  }

  render() {
    return (
      <Paper style={styles.Paper}>
        {players.map((player => {
          return (
            <h5 key={player.id}>{player.name}: {player.description}</h5>
            )
        }))}
      </Paper>
    );
  }

  // componentDidMount() {
  //   const tabLabels = document.querySelectorAll('.MuiTab-label-222');
  //   console.log(tabLabels[2].outerText);

  // }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setPlayers: setPlayers },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide)
