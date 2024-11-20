import React from 'react'
import { dataTomas } from '../Constant'
import CardProduit from './CardProduit'

export default function TopAcceuil8() {
  return (
    <div className='container_global relative py-5'>
      <div className='flex items-center justify-between py-2'>
        <span>Tomas this must have for you</span>
        <span className='flex justify-center items-center gap-2 cursor-pointer'>
            All Categorie <i className='fa fa-arrow-right'/>
        </span>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
        {dataTomas.map((item)=>(
            <CardProduit key={item.id} id={item.id} image={item.image} sous_titre={item.sous_titre} titre={item.titre} prix={item.prix} statu={item.statu}/>
        ))}
      </div>
    </div>
  )
}
