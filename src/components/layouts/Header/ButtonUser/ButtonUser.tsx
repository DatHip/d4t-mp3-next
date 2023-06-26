import Image from 'next/image'
import React from 'react'
import Tippy from '@tippyjs/react'

const ButtonUser = () => {
  return (
    <Tippy content='Cá nhân'>
      <div className='flex items-center justify-center w-10 h-10 overflow-hidden rounded-full cursor-pointer hover:shadow-md'>
        <figure>
          <Image
            width={40}
            height={40}
            alt='avatar-d4t'
            src='https://avatar.talk.zdn.vn/default'
          ></Image>
        </figure>
      </div>
    </Tippy>
  )
}

export default ButtonUser
