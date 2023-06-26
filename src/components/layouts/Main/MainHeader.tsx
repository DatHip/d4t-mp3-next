import React from 'react'
import styles from './MainHeaderStyle.module.css'
import NavRoute from '../Header/NavRoute'
import Search from '../Header/Search'
import ButtonTheme from '../Header/ButtonTheme/ButtonTheme'
import ButtonSetting from './../Header/ButtonSetting/ButtonSetting'
import ButtonUser from '../Header/ButtonUser/ButtonUser'

export default function MainHeader () {
  return (
    <header
      className={`fixed left-[240px] right-0 top-0 z-[99] flex h-[70px] min-w-[660px] items-center justify-between px-[var(--padding-section)] ${
        styles.header || ''
      }`}
    >
      <div className='flex items-center justify-start w-full gap-5'>
        <NavRoute></NavRoute>
        <Search></Search>
      </div>
      <div className='flex items-center justify-end gap-3'>
        <ButtonTheme></ButtonTheme>
        <ButtonSetting></ButtonSetting>
        <ButtonUser></ButtonUser>
      </div>
    </header>
  )
}
