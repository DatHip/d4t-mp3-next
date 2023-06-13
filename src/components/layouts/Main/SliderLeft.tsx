import Image from 'next/image'
import React from 'react'
import NavSlider from '../SliderLeft/NavSlider'

export default function SliderLeft() {
  return <aside className='fixed z-[100] w-[240px] bg-[var(--sidebar-bg)] h-[calc(100vh-90px)] zm13:relative'>
    <div className='max-w-[120px] mt-4 ml-6'>
      <Image className='object-cover' width={120} height={40} alt='d4t-mp3' src={'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg'}></Image>
    </div>
    <NavSlider></NavSlider>
  </aside>
}
