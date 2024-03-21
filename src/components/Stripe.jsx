import React from 'react'

const Stripe = ({datas}) => {
  return (
    <div className='w-[16.6%] flex justify-between items-center px-4 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 '>
         <img src={datas.url} alt="" />
        <span className=' font-semibold'>{datas.number}</span>
    </div>
  )
}

export default Stripe