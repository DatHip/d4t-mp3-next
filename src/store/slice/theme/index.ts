/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

export type TThemes = {
  info: {
    name?: string
    itemS?: string
    dataTheme?: string
    bgImg?: string
    bgPlaying?: string
    bgHeader?: boolean
    dataStyle?: string[] | string | null
  }
}

export const initialState: TThemes = {
  info: {
    name: 'Zing Music Awards',
    itemS: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/zma.jpg',
    dataTheme: 'blue',
    bgImg:
      'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/zma.svg',
    bgPlaying:
      'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-player/zma.png',
    bgHeader: false,
    dataStyle: [
      '--layout-bg: #37075d',
      '--primary-bg: #6a39af',
      '--queue-player-popup-bg: #5d218c',
      '--purple-primary: #ed2b91',
      '--link-text-hover: #fe63da',
      '--sidebar-popup-bg: #572f90',
      '--linear-gradient-bg: linear-gradient(to bottom, #740091, #2d1a4c)',
      "--miniplayer-bg-img: url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-player/zma.png')"
    ]
  }
}

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onChangeTheme: (state, { payload }) => {
      state.info = payload
      const rootElement = document.documentElement
      if (payload?.bgImg) {
        rootElement.classList.add('theme-bg-image')
      } else {
        rootElement.classList.remove('theme-bg-image')
      }
      if (payload?.dataTheme) {
        rootElement.setAttribute('data-theme', payload?.dataTheme)
      }
      if (payload?.dataStyle) {
        const styleAttributes: any = payload?.dataStyle
          ?.map((e: never) => e)
          .join(' ; ')
        rootElement.setAttribute('style', styleAttributes)
      } else {
        rootElement.removeAttribute('style')
      }
    }
  }
})

export const useThemeSlice = () => {
  return { actionUser: slice.actions }
}

export const { onChangeTheme } = slice.actions
export const themeReducer = slice?.reducer
