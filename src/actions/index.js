import { players, positions } from '../store';

export function setPlayers() {
  return {
    type: 'SET_PLAYERS',
    payload: players
  }
}

export function selectPlayers(selected_players) {
  return {
    type: 'SELECT_PLAYERS',
    payload: selected_players
  }
}
