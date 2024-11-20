import React from 'react'

export default function TopAcceuil4() {
  return (
    <div className='container_global py-5'>
      <div className='bg-black/5 w-full px-7 md:px-14 py-5 flex flex-1 items-start h-[400px] sm:h-[350px] md:h-[300px] lg:h-[350px] overflow-hidden relative'>
        <div className='flex flex-col items-start justify-center gap-1 z-40'>
          <span className='text-[14px]'>Tsy fantako ino eto</span>
          <h2 className='h2'>AMAZON DELIVERS TO YOU</h2>
          <p className='font-medium text-black text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum itaque dolore.</p>
          <button className='px-4 py-0.5 border-2 border-black rounded-md hover:bg-black/10 text-black transition-all mt-4'>View More</button>
        </div>
        <div className='w-full flex justify-center'>
          <img src="image/11062b_b394d2e0c2884cb9b4637871e7c9ebb2_-removebg-preview.png" alt="" 
          className='w-[200px] sm:w-[400px] md:[500px] h-full object-cover max-sm:absolute max-sm:-right-16 max-sm:-bottom-20' />
        </div>
      </div>
    </div>
  )
}
