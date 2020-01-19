import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
  SEARCH_REPOS
} from '../types';

const handlers = {
  [SEARCH_USERS]: (state, { payload }) => ({
    ...state,
    users: payload,
    loading: false
  }),
  [SEARCH_REPOS]: (state, { payload }) => ({
    ...state,
    searchRepos: payload,
    loading: false
  }),
  [GET_USER]: (state, { payload }) => ({
    ...state,
    user: payload,
    loading: false
  }),
  [GET_REPOS]: (state, { payload }) => ({
    ...state,
    repos: payload,
    loading: false
  }),
  [CLEAR_USERS]: state => ({ ...state, users: [], repos: [] }),
  [SET_LOADING]: state => ({ ...state, loading: true }),
  default: state => state
};

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.default;
  return handler(state, action);
};
