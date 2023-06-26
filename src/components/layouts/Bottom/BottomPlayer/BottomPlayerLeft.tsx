import React from 'react'
import AvatarSongCurrent from './components/AvatarSongCurrent'
import InfoSongCurrent from './components/InfoSongCurrent'
import BoxHoverAction from '@/components/common/BoxHoverAction'

const BottomPlayerLeft = () => {
  return (
    <div className='flex h-full w-[30%] items-center justify-start gap-2'>
      <AvatarSongCurrent></AvatarSongCurrent>
      <InfoSongCurrent></InfoSongCurrent>
      <BoxHoverAction content='Yêu thích'>
        <div className='flex items-center justify-center w-6 h-6'>
          <i className='mt-1 icon ic-like '></i>
        </div>
      </BoxHoverAction>
    </div>
  )
}

export default BottomPlayerLeft
