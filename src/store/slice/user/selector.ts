import { createSelector } from '@reduxjs/toolkit'
import { initialState } from '.'
import { RootState } from '@/types'

const selectDomain = (state: RootState) => state?.user || initialState
export const selectUser = createSelector([selectDomain], user => user)
