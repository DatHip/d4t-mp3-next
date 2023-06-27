import BoxHoverAction from '@/components/common/BoxHoverAction'

const ButtonRepeat = () => {
  return (
    <BoxHoverAction content='Quay lại'>
      <div className='h-6 text-[var(--player-text)]'>
        <i className='icon ic-repeat !text-base'></i>
      </div>
    </BoxHoverAction>
  )
}

export default ButtonRepeat
