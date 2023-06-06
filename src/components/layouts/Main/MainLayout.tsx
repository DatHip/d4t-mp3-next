import React from 'react'
import MainHeader from './MainHeader'
import SliderLeft from './SliderLeft'
import BottomMain from './BottomMain'

interface Props {
  children: React.ReactNode
}

export default function MainLayout ({ children }: Props) {
  return (
    <div className='main min-h-screen'>
      <MainHeader></MainHeader>
      <div>{children}</div>
      <SliderLeft></SliderLeft>
      <BottomMain></BottomMain>
    </div>
  )
}
