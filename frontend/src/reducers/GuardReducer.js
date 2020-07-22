import { SET_GUARDS } from "../actions/types";
const initialState = { content: [] };

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_GUARDS:
      return payload;

    default:
      return state;
  }
};
