import IconTheme from '@/asset/icons/IconTheme'
import Tippy from '@tippyjs/react'
import React from 'react'

const ButtonTheme = () => {
  return (
    <Tippy content='Chủ đề'>
      <div className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--alpha-bg)] hover:shadow-md'>
        <IconTheme></IconTheme>
      </div>
    </Tippy>
  )
}

export default ButtonTheme
