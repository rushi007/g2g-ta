import React, { Component } from 'react';
import API from './Api';
import axios from 'axios';
import {fetchDataPending, fetchDataSuccess, fetchDataError} from '../actions';

const now = new Date();

export const fetchData = () => {
  return dispatch => {
      dispatch(fetchDataPending());
      let ls_data = JSON.parse(localStorage.getItem('api_data'));
      if (ls_data && 'expiry' in ls_data) {
        if (now.getTime() > ls_data['expiry']) {
          fetchAPIData().then((dt) => {
            dispatch(fetchDataSuccess(dt));
          });
        }else{
          dispatch(fetchDataSuccess(ls_data['data']));
        }
      }else{
        fetchAPIData().then((dt) => {
          dispatch(fetchDataSuccess(dt));
        });
      }
  }
}

const fetchAPIData = () => {
  return API.get('posts')
    .then(res => {
      if(res.error) {
          throw(res.error);
      };
      localStorage.setItem('api_data', JSON.stringify({'expiry': now.getTime()+30000, 'data': res.data}));
      return JSON.parse(localStorage.getItem('api_data'))['data'];
    })
    .catch(error => {
        return fetchDataError(error);
    });
}

export default fetchData;
