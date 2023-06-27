import React from 'react'
import BottomPlayerLeft from './BottomPlayerLeft'
import BottomPlayerRight from './BottomPlayerRight'
import BottomPlayerCenter from './ButtomPlayerCenter/BottomPlayerCenter'

const BottomPlayer = () => {
  return (
    <div className='bg-miniplayer flex h-full w-full items-center border-t-[1px] border-solid border-[var(--border-player)] bg-[var(--player-bg)] bg-cover bg-[50%] bg-no-repeat px-5'>
      <BottomPlayerLeft></BottomPlayerLeft>
      <BottomPlayerCenter></BottomPlayerCenter>
      <BottomPlayerRight></BottomPlayerRight>
    </div>
  )
}

export default BottomPlayer
