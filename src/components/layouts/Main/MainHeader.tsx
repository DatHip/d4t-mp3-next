import React from 'react'
import styles from './MainHeaderStyle.module.css';
import NavRoute from '../Header/NavRoute';
import Search from '../Header/Search';
import ButtonTheme from '../Header/ButtonTheme/ButtonTheme';

export default function MainHeader() {
  return <header className={`fixed left-[240px] top-0 right-0 z-[99] h-[70px] px-[var(--padding-section)] min-w-[660px] flex items-center justify-between ${styles.header || ""}`}>
    <div className='flex items-center justify-start gap-5 w-full'>
      <NavRoute></NavRoute>
      <Search></Search>
    </div>
    <div className='flex items-center justify-end gap-3'>
      <ButtonTheme></ButtonTheme>
    </div>
  </header>
}
