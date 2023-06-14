
export default function Search() {
    return (
        <form className="relative w-full max-w-[440px]">
            <div className="flex rounded-3xl pl-4 w-full mb-1 bg-[var(--alpha-bg)] h-10 items-center justify-start">
                <button className="zm-btn mt-1 button">
                    <i className="icon !text-xl ic-search"></i>
                </button>
                <input className="inline-block bg-transparent text-sm text-[--search-text] h-8 py-1 max-w-full w-full outline-none " placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." type="text" />
            </div>
        </form>
    )
}