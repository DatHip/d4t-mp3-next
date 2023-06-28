'use client'
import { THEMES } from '@/data/dataThemes'
import { onChangeTheme } from '@/store/slice/theme'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'

const ChangeTheme = () => {
  const rootElement = document.documentElement
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (!rootElement.getAttribute('data-theme')) {
      dispatch(onChangeTheme(THEMES[2].items[5]))
    }
  }, [])

  return <></>
}

export default ChangeTheme
