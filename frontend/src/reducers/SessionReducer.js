import { SET_SESSION, ADD_SESSION } from "../actions/types";
const initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_SESSION:
      return payload;
    case ADD_SESSION: {
      let ids = state.map(e => e.id);
      let index = ids.indexOf(payload.id);
      if (index === -1) {
        return [...state, payload];
      }

      return state;
    }

    default:
      return state;
  }
};
