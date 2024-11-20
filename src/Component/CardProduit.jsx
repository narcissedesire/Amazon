import React from 'react'

export default function CardProduit({ id, image, sous_titre, titre, prix, statu }) {
  return (
    <div key={id} className='flex flex-col items-center gap-4 bg-black/5 rounded-md p-5 relative'>
        <div className='w-full '>
            <img className='w-full h-full object-contain' src={image} alt="" />
        </div>
        <div className='flex flex-col items-start w-full'>
            <span className='text-[14px]'>{sous_titre}</span>
            <h3 className='h3 mb-1 leading-none max-sm:text-[20px]'>{titre}</h3>
            <span>Star</span>
            <h2 className='h3'>${prix}</h2>
        </div>
        {statu==="Nouveau" &&
        <span className='absolute top-2 left-3 px-2 rounded-md bg-[orange] text-[13px] text-white cursor-default'>Nouveau</span>}
    </div>
  )
}
