import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPlayers, selectPlayers } from '../../actions/index';
import styles  from './body';
import { players }  from '../../store.js';


class LeftSide extends Component {
  componentWillMount() {
    this.props.selectPlayers(players);
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
    { setPlayers: setPlayers,
      selectPlayers: selectPlayers },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    players: state.players,
    selectPlayers: state.selectedPlayers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide)
