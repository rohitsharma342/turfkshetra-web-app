import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import { Navbar } from '../Navbar/navbar'

export const NavLayout = ({children}) => {
  return (
    <div className='flex w-[100] justify-start'>
        <>
        <Navbar/>
        <main className="">{children}</main>
        </>
       
    </div>
  )
}
