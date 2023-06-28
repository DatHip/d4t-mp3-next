import BoxHoverAction from '@/components/common/BoxHoverAction'

const ButtonVolume = () => {
  return (
    <BoxHoverAction content='MV'>
      <div className='h-6 text-[var(--player-text)]'>
        <i className='icon ic-volume-mute  !text-base'></i>
        {/* <i className='icon ic-volume !text-base'></i> */}
      </div>
    </BoxHoverAction>
  )
}

export default ButtonVolume
