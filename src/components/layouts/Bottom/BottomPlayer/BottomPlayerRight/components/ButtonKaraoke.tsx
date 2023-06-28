import BoxHoverAction from '@/components/common/BoxHoverAction'
import React from 'react'

const ButtonKaraoke = () => {
  return (
    <BoxHoverAction content='MV'>
      <div className='h-6 text-[var(--player-text)]'>
        <i className='icon ic-karaoke !text-base'></i>
      </div>
    </BoxHoverAction>
  )
}

export default ButtonKaraoke
