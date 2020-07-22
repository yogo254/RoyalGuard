import { SET_SESSION } from "../actions/types";
const initialState = { content: [] };

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_SESSION:
      return payload;

    default:
      return state;
  }
};
