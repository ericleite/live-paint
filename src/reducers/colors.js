// Actions
import { SELECT_COLOR } from 'actions/colors';

export default function color(
  state = {
    active: { r: 0, g: 0, b: 0, a: 1 }
  },
  action
) {
  switch (action.type) {
    case SELECT_COLOR:
      return {
        ...state,
        active: action.color
      };
    default:
      return state;
  }
}
