'use client'
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

export type typeInitialQueue = {
  isLoading: boolean
  isPlaying: boolean
  isLoop: boolean
  isClock: boolean
  isReady: boolean
  isRandom: boolean
  isMuted: boolean
  volume: number
  duration: number
  progressInterval: number
}

export const initialState: typeInitialQueue = {
  isLoading: false,
  isPlaying: false,
  isLoop: false,
  isClock: false,
  isReady: false,
  isRandom: false,
  isMuted: false,
  volume: 0.8,
  duration: 0,
  progressInterval: 500
}

const slice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    toggleLoop: (state: typeInitialQueue) => {
      state.isLoop = !state.isLoop
    },
    toggleMuted: (state: typeInitialQueue) => {
      state.isMuted = !state.isMuted
    },
    toggleRandom: (state: typeInitialQueue) => {
      state.isRandom = !state.isRandom
    },
    changeVolume: (state: typeInitialQueue, { payload }) => {
      state.isMuted = payload === 0
      state.volume = payload
    }
  }
})

export const useQueueSlice = () => {
  return { queueActions: slice.actions }
}

export const { actions: queueActions, reducer } = slice
export const queueReducer = slice?.reducer
