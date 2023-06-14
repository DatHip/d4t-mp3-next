"use client"
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit';

export type typeInitialUser = {
 userName: "",
 email: "",
 avatar: "",
 id: ""
};

export const initialState: typeInitialUser = {
  userName: "",
  email: "",
  avatar: "",
  id: ""
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    refreshToken: (state: typeInitialUser, action) => {
      state.userName = action.payload      
    },
  },
});

export const useUserSlice = () => {
  return { actionUser: slice.actions };
};

export const { actions: userActions, reducer } = slice;
export const userReducer = slice?.reducer;
