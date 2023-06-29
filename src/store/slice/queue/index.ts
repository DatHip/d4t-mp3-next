'use client'
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

export type typeInitialQueue = {
  isLoading: boolean
  isPlaying: boolean
  isLoop: boolean
  isClock: boolean
  isReady: boolean
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
  isMuted: false,
  volume: 0.8,
  duration: 0,
  progressInterval: 500
}

const slice = createSlice({
  name: 'queue',
  initialState,
  reducers: {}
})

export const useQueueSlice = () => {
  return { actionQueue: slice.actions }
}

export const { actions: QueueActions, reducer } = slice
export const queueReducer = slice?.reducer
