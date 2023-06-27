import BoxHoverAction from '@/components/common/BoxHoverAction'

const ButtonPrevious = () => {
  return (
    <BoxHoverAction content='Quay lại'>
      <div className='h-6 text-[var(--player-text)]'>
        <i className='icon ic-pre !text-base'></i>
      </div>
    </BoxHoverAction>
  )
}

export default ButtonPrevious
