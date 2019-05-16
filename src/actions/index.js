import { players, positions } from '../store';

export function setPlayers() {
  return {
    type: 'SET_PLAYERS',
    payload: players
  }
}

export function selectPlayers() {
  return {
    type: 'SELECT_PLAYERS',
    payload: selectedPlayers
  }
}
