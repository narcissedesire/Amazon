import React from 'react'
import { dataPub } from '../Constant'

export default function TopAcceuil3() {
  return (
    <div className='container_global mb-5'>
      <div className='py-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {dataPub.map((item)=>(
                <div key={item.id} className='flex flex-col-reverse md:flex-row items-center justify-between gap-5 overflow-hidden relative bg-[#ff179717] px-7 py-3 rounded-md'>
                    <div className='flex flex-col items-start gap-1 text-black'>
                        <h2 className='h2'>{item.titre}</h2>
                        <p className='text-[16px]'>{item.desc}</p>
                        <button className='text-[18px] items-center gap-2 mt-5 font-medium'>See more <i className='fa fa-arrow-right'/></button>
                    </div>
                    <div className='w-full h-full flex items-center justify-center'>
                        <img src={item.image} className='object-cover ' alt="" />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
