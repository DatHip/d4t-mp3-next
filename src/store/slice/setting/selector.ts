import { createSelector } from '@reduxjs/toolkit'
import { initialState } from '.'
import { type RootState } from '@/types'

const selectDomain = (state: RootState) => state?.setting || initialState
// const selectSetting = createSelector([selectDomain], setting => setting)
export const selectTabRight = createSelector(
  [selectDomain],
  setting => setting.tabRight
)
