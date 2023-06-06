import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function MainLayout ({ children }: Props) {
  return (
    <div className='min-h-screen'>
      <div>{children}</div>
    </div>
  )
}
