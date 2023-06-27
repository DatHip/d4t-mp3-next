import BoxHoverAction from '@/components/common/BoxHoverAction'

const ButtonRandom = () => {
  return (
    <BoxHoverAction content={'Bật phát ngẫu nhiên'}>
      <div className='h-6 text-[var(--player-text)]'>
        <i className='icon ic-shuffle !text-base'></i>
      </div>
    </BoxHoverAction>
  )
}

export default ButtonRandom
