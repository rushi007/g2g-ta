import React, { Component } from 'react';
import API from './Api';
import axios from 'axios';
import {fetchDataPending, fetchDataSuccess, fetchDataError} from '../actions';

export const fetchData = () => {
  return dispatch => {
      dispatch(fetchDataPending());
      return API.get('posts')
        .then(res => {
          if(res.error) {
              throw(res.error);
          };
          dispatch(fetchDataSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchDataError(error));
        })
  }
}

export default fetchData;
