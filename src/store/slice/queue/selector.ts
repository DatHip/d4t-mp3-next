import { createSelector } from '@reduxjs/toolkit'
import { initialState } from '.'
import { type RootState } from '@/types'

const selectDomain = (state: RootState) => state?.queue || initialState
const selectQueue = createSelector([selectDomain], queue => queue)
const selectRandom = createSelector([selectDomain], queue => queue.isRandom)
const selectLoop = createSelector([selectDomain], queue => queue.isLoop)
const selectMuted = createSelector([selectDomain], queue => queue.isMuted)
const selectReady = createSelector([selectDomain], queue => queue.isReady)
const selectLoading = createSelector([selectDomain], queue => queue.isLoading)
const selectPlaying = createSelector([selectDomain], queue => queue.isPlaying)
const selectVolume = createSelector([selectDomain], queue => queue.volume)
const selectDuration = createSelector([selectDomain], queue => queue.duration)
const selectProgressInterval = createSelector(
  [selectDomain],
  queue => queue.progressInterval
)
export {
  selectDuration,
  selectLoading,
  selectLoop,
  selectQueue,
  selectRandom,
  selectMuted,
  selectReady,
  selectPlaying,
  selectVolume,
  selectProgressInterval
}
