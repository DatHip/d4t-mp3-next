import LoadingIcon from '@/components/common/LoadingIcon'

const ButtonPlayPause = () => {
  return (
    <>
      {/* Loading */}
      {/* <div className='flex h-[43px] w-[43px] items-center justify-center rounded-full border-[1px] border-solid border-[var(--player-text)]'>
        <LoadingIcon className='!h-8 !w-8'></LoadingIcon>
      </div> */}
      {/* Player */}
      <div className='mx-3 h-6 cursor-pointer text-[var(--player-text)]'>
        <i className='icon ic-pause-circle-outline p-1 !text-[48px]'></i>
        {/* <i className='icon ic-play-circle-outline !text-5xl'></i> */}
      </div>
    </>
  )
}

export default ButtonPlayPause
