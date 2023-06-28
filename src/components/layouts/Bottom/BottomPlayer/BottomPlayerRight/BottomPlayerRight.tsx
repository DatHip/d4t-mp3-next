import React from 'react'
import ButtonMV from './components/ButtonMV'
import ButtonKaraoke from './components/ButtonKaraoke'
import ButtonVolume from './components/ButtonVolume'
import ButtonToggleRight from './components/ButtonToggleRight'

const BottomPlayerRight = () => {
  return (
    <div className='flex w-[30%] items-center justify-end gap-3'>
      <ButtonMV></ButtonMV>
      <ButtonKaraoke></ButtonKaraoke>
      <ButtonVolume></ButtonVolume>
      <div className='h-8 w-[1px] bg-[var(--border-player)]'></div>
      <ButtonToggleRight></ButtonToggleRight>
    </div>
  )
}

export default BottomPlayerRight
