
import IconBack from '@/asset/icons/IconBack';
export default function NavRoute() {
    return (
        <div className="flex items-center justify-center gap-2">
            <button className='zm-btn text-2xl'>
                <IconBack></IconBack>
            </button>
            <button className='zm-btn text-2xl'>
                <i className="icon ic-forward"></i>
            </button>
        </div>
    )
}
