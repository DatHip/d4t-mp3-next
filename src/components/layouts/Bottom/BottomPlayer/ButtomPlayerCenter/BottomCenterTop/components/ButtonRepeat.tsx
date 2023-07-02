import BoxHoverAction from '@/components/common/BoxHoverAction'
import { queueActions } from '@/store/slice/queue'
import { selectLoop } from '@/store/slice/queue/selector'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ButtonRepeat = () => {
  const isLoop = useSelector(selectLoop)
  const dispatch = useDispatch()

  const handleLoop = useCallback(() => dispatch(queueActions.toggleLoop()), [])

  return (
    <BoxHoverAction
      onClick={handleLoop}
      content={`${isLoop ? 'Bật' : 'Tắt'} phát lại`}
    >
      <div className='h-6'>
        <i
          className={`icon ic-repeat !text-base ${
            isLoop
              ? 'text-[var(--link-text-hover)]'
              : 'text-[var(--player-text)]'
          }`}
        ></i>
      </div>
    </BoxHoverAction>
  )
}

export default ButtonRepeat
