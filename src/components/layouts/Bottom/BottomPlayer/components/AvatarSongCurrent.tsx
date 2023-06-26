import BoxHover from '@/components/common/BoxHover'
import Image from 'next/image'
import React from 'react'

const AvatarSongCurrent = () => {
  return (
    <BoxHover
      childrenHover={
        <span className='material-icons-outlined'> open_in_full </span>
      }
      className='w-16 h-16 rounded-lg shadow-lg'
    >
      <Image
        width={64}
        height={64}
        alt='img-song-d4t'
        src={
          'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/1/f/1/e1f1f29fd4d171cd37c42bef51935a17.jpg'
        }
      ></Image>
    </BoxHover>
  )
}

export default AvatarSongCurrent
