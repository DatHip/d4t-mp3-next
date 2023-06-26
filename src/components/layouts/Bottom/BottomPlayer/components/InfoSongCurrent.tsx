import Link from 'next/link'

const InfoSongCurrent = () => {
  return (
    <div className=''>
      <Link
        className='line-clamp-1 text-base font-medium text-[--player-text] hover:opacity-80'
        href={'album/3'}
      >
        Kẻ Viết Ngôn Tình
      </Link>
      <div></div>
    </div>
  )
}

export default InfoSongCurrent
