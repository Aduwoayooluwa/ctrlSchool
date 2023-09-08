import React, { useState } from 'react'

type Props = {
    children: React.ReactElement
    active: boolean
}

const Layout = ({ children, active }: Props) => {

  return (
    <div className='flex w-full items-start p-10'>
        <aside className='hidden md:flex'>
            <ul>
                <li className={`p-5 rounded-[10px] ${!active && 'bg-[#003399] text-white'}`}>Why Us</li>

                <li className={`p-5 rounded-[10px] ${active && 'bg-[#003399] text-white'}`}>Top Courses</li>

                <li className={`p-5 rounded-[10px] ${active && 'bg-[#003399] text-white'}`}>Who Should Join</li>

                <li className={`p-5 rounded-[10px] ${active && 'bg-[#003399] text-white'}`}>Study Timings</li>

                <li className={`p-5 rounded-[10px] ${active && 'bg-[#003399] text-white'}`}>How To Start</li>
            </ul>
        </aside>

        <div className=' w-full'>
            {children}
        </div>
    </div>
  )
}

export default Layout