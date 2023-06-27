import React from 'react'
import BottomCenterTop from './BottomCenterTop/BottomCenterTop'
import BottomCenterBottom from './BottomCenterBottom/BottomCenterBottom'

const BottomPlayerCenter = () => {
  return (
    <div className='w-[40%]'>
      <BottomCenterTop></BottomCenterTop>
      <BottomCenterBottom></BottomCenterBottom>
    </div>
  )
}

export default BottomPlayerCenter
