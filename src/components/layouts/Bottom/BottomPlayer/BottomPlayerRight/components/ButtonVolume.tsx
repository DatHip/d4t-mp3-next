import BoxHoverAction from '@/components/common/BoxHoverAction'
import { queueActions } from '@/store/slice/queue'
import { selectMuted } from '@/store/slice/queue/selector'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ButtonVolume = () => {
  const muted = useSelector(selectMuted)
  const dispatch = useDispatch()

  const handleMuted = useCallback(
    () => dispatch(queueActions.toggleMuted()),
    []
  )

  return (
    <BoxHoverAction onClick={handleMuted}>
      <div className='h-6 text-[var(--player-text)]'>
        <i
          className={`icon !text-base ${
            muted ? 'ic-volume-mute' : 'ic-volume'
          }`}
        ></i>
      </div>
    </BoxHoverAction>
  )
}

export default ButtonVolume
