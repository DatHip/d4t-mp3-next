import React from 'react'
import styles from './MainHeaderStyle.module.css';
import NavRoute from '../Header/NavRoute';

export default function MainHeader() {
  return <header className={`fixed left-[240px] top-0 right-0 z-[99] h-[70px] px-[var(--padding-section)] min-w-[660px] flex items-center justify-between ${styles.header || ""}`}>
    <div>
      <NavRoute></NavRoute>

    </div>
    <div>Menu User &  Setting</div>
  </header>
}
