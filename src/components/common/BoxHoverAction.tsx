import Tippy from '@tippyjs/react'
import { memo } from 'react'
interface BoxHoverActionProps {
  children?: React.ReactNode
  className?: string
  content?: string
  onClick?: () => void
}

const BoxHoverAction: React.FC<BoxHoverActionProps> = ({
  children,
  className,
  onClick,
  content
}) => {
  const node = (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center rounded-full p-[6px] transition-all hover:bg-[var(--hover-tooltip-opacity)] ${className}`}
    >
      {children}
    </div>
  )

  if (!content) {
    return node
  }

  return <Tippy content={content}>{node}</Tippy>
}

export default memo(BoxHoverAction)
