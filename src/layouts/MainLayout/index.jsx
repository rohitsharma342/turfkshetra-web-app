import React from 'react'
import Sidebar from '../Sidebar/sidebar'

export const MainLayout = ({children}) => {
  return (
    <div className='flex w-[100%] justify-start'>
        <>
        {/* <Sidebar/> */}
        <main className="w-[100%]">{children}</main>
        </>
       
    </div>
  )
}
