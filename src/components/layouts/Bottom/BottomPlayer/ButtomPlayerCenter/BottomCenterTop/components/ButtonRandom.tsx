import BoxHoverAction from '@/components/common/BoxHoverAction'
import { queueActions } from '@/store/slice/queue'
import { selectRandom } from '@/store/slice/queue/selector'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ButtonRandom = () => {
  const random = useSelector(selectRandom)
  const dispatch = useDispatch()

  const handleRandom = useCallback(
    () => dispatch(queueActions.toggleRandom()),
    []
  )

  return (
    <BoxHoverAction
      onClick={handleRandom}
      content={`${random ? 'Bật' : 'Tắt'} phát ngẫu nhiên`}
    >
      <div className='h-6 '>
        <i
          className={`icon ic-shuffle !text-base ${
            random
              ? 'text-[var(--link-text-hover)]'
              : 'text-[var(--player-text)]'
          }`}
        ></i>
      </div>
    </BoxHoverAction>
  )
}

export default ButtonRandom
