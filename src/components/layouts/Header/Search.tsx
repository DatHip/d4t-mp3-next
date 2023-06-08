
export default function Search() {
    return (
        <form className="relative w-full max-w-[440px] flex items-center gap-3">
            <div className="flex rounded-3xl bg-[var(--alpha-bg) w-full h-10 flex items-center justify-center">
                <button className="zm-btn button text-lg">
                    <i className="icon ic-search"></i>
                </button>
            </div>
            <input className="inline-block text-base text-[--search-text] h-8 py-1 max-w-full w-full outline-none " placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." type="text" />
        </form>
    )
}
