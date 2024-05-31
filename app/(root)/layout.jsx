import SideBarWrapper from '@components/SideBarWrapper'
import React from 'react'

const layout = ({children}) => {
  return (
    <SideBarWrapper>
        {children}
    </SideBarWrapper>
  )
}

export default layout
