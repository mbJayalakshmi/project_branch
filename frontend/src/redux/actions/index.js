// src/redux/actions/index.js

import axios from 'axios';

export const fetchData = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:8000/api/data');
    dispatch({
      type: 'FETCH_DATA_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_DATA_FAILURE',
      payload: error.message,
    });
  }
};
