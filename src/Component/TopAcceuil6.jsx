import React from 'react'
import { dataKojakoja } from '../Constant'
import CardProduit from './CardProduit'

export default function TopAcceuil6() {
  return (
    <div className='container_global relative py-5'>
      <div className='flex items-center justify-between py-2'>
        <span>Shop by categorie</span>
        <span className='flex justify-center items-center gap-2 cursor-pointer'>
            All Categorie <i className='fa fa-arrow-right'/>
        </span>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
        {dataKojakoja.map((item)=>(
            <CardProduit key={item.id} id={item.id} image={item.image} sous_titre={item.sous_titre} titre={item.titre} prix={item.prix} statu={item.statu}/>
        ))}
      </div>
    </div>
  )
}
