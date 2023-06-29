import { createSelector } from '@reduxjs/toolkit'
import { initialState } from '.'
import { type RootState } from '@/types'

const selectDomain = (state: RootState) => state?.queue || initialState
export const selectQueue = createSelector([selectDomain], queue => queue)
