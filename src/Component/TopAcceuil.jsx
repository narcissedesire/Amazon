import React from 'react'

export default function TopAcceuil() {
  return (
    <div className='container_global py-7 overflow-x-hidden relative'>
      <div className='bg-slate-100 w-full px-10 py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-5'>
        <div className='text-black flex flex-col gap-3'>
            <div>
                <div className='sm:text-[40px] font-bold leading-tight lg:text-[50px] max-sm:text-[30px]'><span className='lg:whitespace-nowrap'>SHOP COMPUTER</span> <br/>
                <span className='sm:text-[36px] lg:text-[48px] max-sm:text-[26px] whitespace-nowrap'>& ACCESSORIES </span></div>
            </div>
            <div className='text-[16px] font-semibold max-lg:w-[50%]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quo quae corrupti?
            </div>
            <div>
                <button className='border-black/30 border rounded-md px-3 py-1 hover:bg-slate-200 transition-all'>View more</button>
            </div>
        </div>
        <div className='static lg:relative'>
            <div className='bg-white lg:w-[80%] w-full p-5 rounded-xl flex flex-col gap-1 lg:absolute lg:-bottom-7'>
              <p className='text-[#797979] text-sm'>Comuter de merde tsy fantako iz ty</p>
              <h3 className='h4 md:h3 whitespace-nowrap'>JBL T6666 Black</h3>
              <h4 className='h5 md:h4'>Headphones</h4>
              <span>Star</span>
              <h1 className='text-[20px]'><span className='h2'>$125</span> allow</h1>
              <span className='text-[#797979] text-sm flex items-center gap-1'>
                <span>Io ny produit</span>
                <span className='bg-[#797979] p-[1px] w-[60px]'></span>
                <i className='fa fa-arrow-right'/>
              </span>
            </div>
            <img 
            className='absolute lg:-top-[26px] lg:-right-8 lg:h-[120%] h-[60%] top-[294px] -right-7 max-[700px]:-right-48 overflow-x-hidden'
            src='image/téléchargement-removebg-preview.png'/>
            <span className='max-lg:hidden absolute -top-0 right-5 w-10 h-10 rounded-full bg-[#e29f0f] text-white flex items-center justify-center'>50%</span>
        </div>
      </div>
    </div>
  )
}
