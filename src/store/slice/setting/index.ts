/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { createSlice } from '@reduxjs/toolkit'

export type typeInitialSetting = {
  tabRight: boolean
}

export const initialState: typeInitialSetting = {
  tabRight: false
}

const slice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setTabRight: (state: typeInitialSetting, { payload }) => {
      state.tabRight = payload
    }
  }
})

export const useSettingSlice = () => {
  return { settingActions: slice.actions }
}

export const { actions: settingActions, reducer } = slice
export const settingReducer = slice?.reducer
