import React from 'react'
import { dataCategorie } from '../Constant'

export default function TopAcceuil2() {
  return (
    <div className='container_global relative py-5'>
      <div className='flex items-center justify-between py-2'>
        <span>Shop by categorie</span>
        <span className='flex justify-center items-center gap-2 cursor-pointer'>
            All Categorie <i className='fa fa-arrow-right'/>
        </span>
      </div>
      <div className='grid grid-cols-2 xl:grid-cols-4 gap-3'>
        {dataCategorie.map((item)=>(
            <div key={item.id} className='bg-black/5 flex flex-col items-center justify-between gap-3 py-7 
            rounded-lg hover:shadow-custom1 transition-all group overflow-hidden'>
                <div className='w-full px-3 flex items-center justify-center'>
                    <img src={item.image} className=' group-hover:scale-110 transition-all duration-300'/>
                </div>
                <div className='text-[20px] font-semibold text-black'>{item.titre}</div>
            </div>
        ))}
      </div>
    </div>
  )
}
