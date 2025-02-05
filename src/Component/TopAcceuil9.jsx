import React from 'react'
import CardPub from './CardPub'
import { dataPup2 } from '../Constant'

export default function TopAcceuil9() {
  return (
    <div className='container_global relative mb-5'>
      <div className='p-5 px-8 bg-[#ff179717] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
        {dataPup2.map((item)=>(
          <CardPub key={item.id} image={item.image} titre={item.titre} desc={item.desc}/>
        ))}
      </div>
    </div>
  )
}
