import { createSelector } from '@reduxjs/toolkit'
import { initialState } from '.'
import { type RootState } from '@/types'

const selectDomain = (state: RootState) => state?.currentInfo || initialState
export const seleccurrentInfo = createSelector(
  [selectDomain],
  currentInfo => currentInfo
)
