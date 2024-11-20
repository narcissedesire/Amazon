import React from 'react'

export default function CardPub({ image, id, titre, desc }) {
  return (
    <div className='cardPub flex flex-col justify-between'>
        <div className='flex items-center  gap-1.5 text-[18px] font-medium w-full text-black cursor-grabbing'>
          <img src={image} className='w-[100px]'/>
          <div className='flex flex-col'>
              <span className='font-semibold'>{titre}</span>
              <p className='leading-snug'>{desc}</p>
          </div>
        </div>
    </div>
  )
}
