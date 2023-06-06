import React from 'react'
import MainHeader from './MainHeader'
import SliderLeft from './SliderLeft'
import BottomMain from './BottomMain'

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='relative overflow-hidden bg-[var(--layout-bg)] bg-no-repeat flex min-h-screen bg-main'>
      <MainHeader></MainHeader>
      <div>{children}</div>
      <SliderLeft></SliderLeft>
      <BottomMain></BottomMain>
    </div>
  )
}
