'use client'
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

export type typeInitialCurrentInfo = {
  currentEncodeId: string
  playlistEncodeId: string
  listSong: unknown[]
  listSongShuffle: unknown[]
  infoCurrentAlbum: unknown
  currentIndexSong: number
  infoSongCurrent: unknown
  infoSongNext: unknown
  infoCurrentMv: unknown
  loading: boolean
}

export const initialState: typeInitialCurrentInfo = {
  currentEncodeId: '',
  playlistEncodeId: '',
  listSong: [],
  listSongShuffle: [],
  infoCurrentAlbum: {},
  currentIndexSong: 0,
  infoSongCurrent: {},
  infoSongNext: {},
  infoCurrentMv: {},
  loading: false
}

const slice = createSlice({
  name: 'currentInfo',
  initialState,
  reducers: {}
})

export const useCurrentInfoSlice = () => {
  return { actionCurrentInfo: slice.actions }
}

export const { actions: CurrentInfoActions, reducer } = slice
export const currentInfoReducer = slice?.reducer
