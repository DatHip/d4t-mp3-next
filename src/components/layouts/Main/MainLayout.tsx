import React from 'react'
import MainHeader from './MainHeader'
import SliderLeft from './SliderLeft'
import BottomMain from './BottomMain'

interface Props {
  children: React.ReactNode
}

export default function MainLayout ({ children }: Props) {
  return (
    <div className='bg-main relative flex min-h-screen overflow-hidden bg-[var(--layout-bg)] bg-no-repeat'>
      <SliderLeft></SliderLeft>
      <MainHeader></MainHeader>
      <div>{children}</div>
      <BottomMain></BottomMain>
    </div>
  )
}
