export default function Search () {
  return (
    <form className='relative w-full max-w-[440px]'>
      <div className='mb-1 flex h-10 w-full items-center justify-start gap-3 rounded-3xl bg-[var(--alpha-bg)] pl-4'>
        <button className='mt-1 zm-btn button'>
          <i className='icon ic-search !text-xl'></i>
        </button>
        <input
          className='inline-block h-8 w-full max-w-full bg-transparent py-1 text-sm text-[--search-text] outline-none '
          placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
          type='text'
        />
      </div>
    </form>
  )
}
