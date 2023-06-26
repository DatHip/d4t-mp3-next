import React from 'react'
import BottomPlayerLeft from './BottomPlayerLeft'
import BottomPlayerCenter from './BottomPlayerCenter'
import BottomPlayerRight from './BottomPlayerRight'

const BottomPlayer = () => {
  return (
    <div className='bg-miniplayer h-full w-full border-t-[1px] border-solid border-[var(--border-player)] bg-[var(--player-bg)] bg-cover bg-[50%] bg-no-repeat px-5'>
      <BottomPlayerLeft></BottomPlayerLeft>
      <BottomPlayerCenter></BottomPlayerCenter>
      <BottomPlayerRight></BottomPlayerRight>
    </div>
  )
}

export default BottomPlayer
