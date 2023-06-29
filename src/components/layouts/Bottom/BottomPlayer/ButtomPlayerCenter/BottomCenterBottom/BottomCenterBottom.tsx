import ReactPlayer from 'react-player'

const BottomCenterBottom = () => {
  return (
    <>
      <div className='flex w-full items-center justify-center'>
        <p></p>
        <div></div>
        <p></p>
      </div>
      <ReactPlayer
        width={0}
        height={0}
        config={{ file: { forceAudio: true } }}
      />
    </>
  )
}

export default BottomCenterBottom
