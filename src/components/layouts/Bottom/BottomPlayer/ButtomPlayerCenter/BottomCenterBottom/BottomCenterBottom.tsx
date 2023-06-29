/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { selectQueue } from '@/store/slice/queue/selector'
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

const BottomCenterBottom = () => {
  const {
    duration: dur,
    isLoop,
    isMuted,
    isReady,
    volume,
    isPlaying
  } = useSelector(selectQueue)
  const playerRef = useRef<ReactPlayer | null>(null)
  const [duration, setDuration] = useState(0)
  const [played, setPlayed] = useState<string>('')
  const [seeking, setSeeking] = useState(false)

  const handleSeekMouseDown = () => {
    setSeeking(true)
  }

  const handleSeekChange = (e: any) => {
    setPlayed(e.target.value)
  }

  const handleSeekMouseUp = (e: any) => {
    setSeeking(false)
    playerRef.current.seekTo(parseFloat(e.target.value))
  }

  const handleDuration = (value: any) => {
    setDuration(value)
  }

  const handleProgress = (value: any) => {
    if (!seeking) {
      console.log(value)
    }
  }

  return (
    <div className='mt-[14px]'>
      <div className='flex w-full items-center justify-center'>
        <p></p>
        <input
          type='range'
          min={0}
          max={0.999999}
          step='any'
          value={played}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
        />
        <p></p>
      </div>
      <ReactPlayer
        ref={playerRef}
        width={0}
        height={0}
        onError={e => console.log('onError', e)}
        muted={isMuted}
        volume={volume}
        playing={isPlaying}
        loop={isLoop}
        onProgress={handleProgress}
        onDuration={handleDuration}
        config={{ file: { forceAudio: true } }}
      />
    </div>
  )
}

export default BottomCenterBottom
