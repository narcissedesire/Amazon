import React from 'react'

export default function TopAcceuil7() {
  return (
    <div className='container_global py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='bg-[#ff179717] p-4 md:py-14 md:px-10 rounded-md flex flex-col-reverse md:flex-row gap-3 h-[500px] md:h-[330px] overflow-hidden'>
          <div className='flex flex-col gap-7 items-start'>
            <div className='flex flex-col items-start gap-1'>
              <h3 className='h3'>Confy styles for her</h3>
              <p className='text-[#333333] text-[16px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim, fuga ab adipisci tempore quasi?</p>
              <span className='flex items-center gap-2 text-[16px] text-[#333333] mt-2'>See more <i className='fa fa-arrow-right'/></span>
            </div>
            <div className='flex items-center justify-center'>
              <img className='w-[80px]' src="image/sacamain-naturel-fabia-MU9305N-1-m-removebg-preview.png" alt="" />
              <div>
                <h4>Top sac modele milay</h4>
                <span>Sac vao zao</span>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-top bg-cover bg-[url('../../public/image/sweat-couleur-camel-removebg-preview.png')]">
            {/* <img className='w-full bottom-0' src="image/sweat-couleur-camel-removebg-preview.png" alt="" /> */}
          </div>
        </div>
        <div className='bg-slate-100 p-4 md:py-14 md:px-10 rounded-md flex flex-col-reverse md:flex-row gap-3 h-[500px] md:h-[330px] overflow-hidden'>
          <div className='flex flex-col gap-7 items-start'>
            <div className='flex flex-col items-start gap-1'>
              <h3 className='h3'>Confy styles for her</h3>
              <p className='text-[#333333] text-[16px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim, fuga ab adipisci tempore quasi?</p>
              <span className='flex items-center gap-2 text-[16px] text-[#333333] mt-2'>See more <i className='fa fa-arrow-right'/></span>
            </div>
            <div className='flex items-center justify-center'>
              <img className='w-[80px]' src="image/Chemises-carreaux-manches-longues-pour-hommes-100-coton-affaires-Oxford-d-contract-hommes-bureau-en-Y-removebg-preview.png" alt="" />
              <div>
                <h4>Top sac modele milay</h4>
                <span>Sac vao zao</span>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-top bg-cover bg-[url('../../public/image/sweat-couleur-camel-removebg-preview.png')]">
            {/* <img className='w-full bottom-0' src="image/sweat-couleur-camel-removebg-preview.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
