import React from 'react'
import { menuNav } from '../Constant'

export default function Navbar() {
  return (
    <div className='container_global py-5'>
      <div className='flex items-center gap-4 max-md:justify-between max-[400px]:flex-col'>
        <div className='max-md:w-full'>
          <img src='image/Amazon-logo.png' className='h-12'/>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='text-black flex items-center justify-between gap-4 max-md:hidden'>
            {menuNav.map((item, index)=>(
              <span className='cursor-pointer whitespace-nowrap' key={index}>{item.label}</span>
            ))}
          </div>
          <div className='flex items-center justify-between lg:gap-3 gap-2 text-[#333333] text-[18px] relative'>
            <span className='flex items-end gap-1 relative border-b border-l rounded-md px-1 py-1'>
              <i className='fa fa-search'/>
              <input className='px-2 py-1 w-[100px] h-[25px] outline-none focus:w-[120px] lg:focus:w-[180px] transition-all placeholder:italic' 
              placeholder='search...'/>
            </span>
            <span className='cursor-pointer px-2 py-0.5 hover:bg-black/5 rounded-md'><i className='fa-regular fa-user'/></span>
            <span className='cursor-pointer px-2 py-0.5 hover:bg-black/5 rounded-md'><i className='fa-regular fa-heart'/></span>
            <span className='cursor-pointer px-2 py-0.5 hover:bg-black/5 rounded-md'><i className='fa fa-shopping-cart'/></span>
          </div>
        </div>
      </div>
    </div>
  )
}
