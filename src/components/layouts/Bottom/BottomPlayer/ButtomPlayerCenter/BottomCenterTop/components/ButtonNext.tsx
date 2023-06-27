import BoxHoverAction from '@/components/common/BoxHoverAction'

const ButtonNext = () => {
  return (
    <BoxHoverAction content='Tiếp theo'>
      <div className='h-6 text-[var(--player-text)]'>
        <i className='icon ic-next !text-base'></i>
      </div>
    </BoxHoverAction>
  )
}

export default ButtonNext
