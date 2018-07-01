// Actions
import { SELECT_TOOL } from 'actions/tools';

// Utils
import { TOOLS } from 'utils/constants';

export default function tools(
  state = {
    active: TOOLS.PENCIL
  },
  action
) {
  switch (action.type) {
    case SELECT_TOOL:
      return {
        ...state,
        active: action.tool
      };
    default:
      return state;
  }
}
