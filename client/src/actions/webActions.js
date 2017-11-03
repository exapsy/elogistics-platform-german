import { TOGGLE_LOADER, LOGIN, FETCH_USER } from './types';
import axios from 'axios';

export const toggleLoader = (loading = undefined) => async dispatch => {
  dispatch({
    type: TOGGLE_LOADER,
    loading
  })
};

export const login = (username, password) => async dispatch => {
  const loginPromise = await axios.post('/api/login', {
    username,
    password
  });
  const res = await axios.get('/api/profile')
    .catch((err) => {
      console.error(err);
    });
  dispatch({
    type: LOGIN,
    profile: res.data
  });
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/profile')
    .catch((err) => {
      console.error(err);
    });
  dispatch({
    type: FETCH_USER,
    profile: res.data || false
  });
}