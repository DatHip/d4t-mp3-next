import React from 'react'
import AvatarSongCurrent from './components/AvatarSongCurrent'

const BottomPlayerLeft = () => {
  return (
    <div className='flex h-full w-[30%] items-center justify-start'>
      <AvatarSongCurrent></AvatarSongCurrent>
      <div></div>
      <div></div>
    </div>
  )
}

export default BottomPlayerLeft
