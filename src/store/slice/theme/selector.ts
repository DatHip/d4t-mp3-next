import { createSelector } from '@reduxjs/toolkit'
import { initialState } from '.'
import { type RootState } from '@/types'

const selectDomain = (state: RootState) => state?.theme || initialState
export const selectThemes = createSelector([selectDomain], theme => theme.info)
