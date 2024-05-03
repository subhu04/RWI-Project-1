import React from 'react'
import Navbar from '../navbar/Navbar'
import Footers from '../footer/Footers'
const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div className="main-content min-h-screen">
                {children}
            </div>
   <Footers />
    </div>
  )
}

export default Layout
