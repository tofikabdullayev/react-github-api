import { SHOW_ALERT, HIDE_ALERT } from "../types";

const handlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  [HIDE_ALERT]: () => null,
  default: state => state
};

export const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.default;
  return handler(state, action);
};
