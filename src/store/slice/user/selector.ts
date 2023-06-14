import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';
import { type RootState } from './../../../types/RootState';

const selectDomain = (state: RootState) => state?.user || initialState;
export const selectUser = createSelector([selectDomain], user => user);