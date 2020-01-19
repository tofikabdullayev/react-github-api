import React, { useReducer } from 'react';
import { githubReducer } from './githubReducer';
import { GithubContext } from './githubContext';
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING,
  SEARCH_REPOS
} from '../types';
import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCreds = url => `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    searchRepos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async value => {
    setLoading();
    const response = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}&`));

    dispatch({ type: SEARCH_USERS, payload: response.data.items });
  };

  const searchRepos = async value => {
    setLoading();
    const response = await axios.get(
      withCreds(`https://api.github.com/search/repositories?q=${value}&`)
    );

    dispatch({ type: SEARCH_REPOS, payload: response.data.items });
  };

  const getUser = async name => {
    setLoading();
    const response = await axios.get(withCreds(`https://api.github.com/users/${name}?`));
    dispatch({ type: GET_USER, payload: response.data });
  };

  const getRepos = async name => {
    setLoading();
    const response = await axios.get(withCreds(`https://api.github.com/users/${name}/repos?`));
    dispatch({ type: GET_REPOS, payload: response.data });
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{
        search,
        searchRepos,
        getUser,
        getRepos,
        clearUsers,
        setLoading,
        user,
        users,
        repos,
        loading
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
