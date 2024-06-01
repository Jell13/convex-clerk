import React from 'react'
import DesktopNav from './nav/DesktopNav'

const SideBarWrapper = ({children}) => {
  return (
    <div className='w-full h-full flex'>
        <DesktopNav/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default SideBarWrapper
