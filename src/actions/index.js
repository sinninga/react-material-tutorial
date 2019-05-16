import { players } from '../store';

export function setPlayers() {
  return {
    type: 'SET_PLAYERS',
    payload: players
  }
}
