import React from 'react'

export const LeftSifebar = () => {
  return (
<div className=' w-full flex flex-col shadow-md gap-6 p-2'>

<div className=' h-[400px] w-full shadow-md p-2'>
     <h2 className=' font-bold text-center'>Adds</h2>
     <img src="https://images-static.nykaa.com/uploads/30778a47-67cc-40db-8974-224f9eb65cfd.jpg?tr=cm-pad_resize,w-300" alt="" className='w-full h-full' />
</div>


<div className=' h-[300px] w-full shadow-md'>
<h2 className=' font-bold text-center'>Top News</h2>
<img src="https://images-static.nykaa.com/creatives/c0a6a1ad-20ed-4ec5-9470-361bcb936925/default.jpg?tr=cm-pad_resize,w-300s" alt="ads" className='h-full' />
</div>


</div>
  )
}
