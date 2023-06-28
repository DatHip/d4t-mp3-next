import React from 'react'
import ButtonMV from './components/ButtonMV'
import ButtonKaraoke from './components/ButtonKaraoke'
import ButtonVolume from './components/ButtonVolume'

const BottomPlayerRight = () => {
  return (
    <div className='flex w-[30%] items-center justify-end gap-3'>
      <ButtonMV></ButtonMV>
      <ButtonKaraoke></ButtonKaraoke>
      <ButtonVolume></ButtonVolume>
    </div>
  )
}

export default BottomPlayerRight
