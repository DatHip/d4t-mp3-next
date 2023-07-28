import Link from "next/link";
import React, { memo } from "react";

const LinkToAll = ({ href }: { href: string }) => {
  return (
    <Link
      prefetch={true}
      className="flex items-center justify-end text-xs text-[var(--text-secondary)] hover:text-[var(--link-text-hover)]"
      href={href}
    >
      TẤT CẢ <i className="icon ic-go-right !text-sm"></i>
    </Link>
  );
};

export default memo(LinkToAll);
