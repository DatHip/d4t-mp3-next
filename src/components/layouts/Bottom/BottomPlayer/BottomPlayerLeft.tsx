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
        <div className='flex h-6 w-6 items-center justify-center'>
          <i className='icon ic-like mt-1 !text-base'></i>
        </div>
      </BoxHoverAction>
    </div>
  )
}

export default BottomPlayerLeft
