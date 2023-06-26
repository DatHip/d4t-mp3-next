import React from 'react'
import Tippy from '@tippyjs/react'

const ButtonSetting = () => {
  return (
    <Tippy content='Cài đặt'>
      <div className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--alpha-bg)] hover:shadow-md'>
        <i className='icon ic-settings'></i>
      </div>
    </Tippy>
  )
}

export default ButtonSetting
