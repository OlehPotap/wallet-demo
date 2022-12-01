import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import AuthService from '../../api/services/auth-service';

export const signup = createAsyncThunk(
  'auth/signup', 
  async (userData, thunkApi) => {
    try {
        const {data} = await AuthService.registration(userData);
      localStorage.setItem('token', data.accessToken)
    } catch (error) {
      Notify.failure(error.response?.data?.message);
      return thunkApi.rejectWithValue(error.response?.data?.message);
      
    }
});

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const {data} = await AuthService.login(userData);
      localStorage.setItem('token', data.accessToken)
      return data
    } catch (error) {
      Notify.failure(error.response?.data?.message);
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    localStorage.removeItem('token')
    return await AuthService.logout();
    
  } catch (error) {Notify.failure(error.response?.data?.message);
    return thunkApi.rejectWithValue(error.response?.data?.message);
  }
});

// export const current = createAsyncThunk('auth/current', async (_, thunkApi) => {
//   try {
//     const token = thunkApi.getState().auth.token;
//     const user = await authAPI.getCurrent(token);
//     return user
//   } catch (error) {
//     Notify.failure(error.response?.data?.message);
//     return thunkApi.rejectWithValue(error.response?.data?.message);
//   }
// });