import React from 'react'

function ProductsCard({heading, Image}) {
  return (
    <div className='flex items-center flex-col justify-start m-3 bg-[#1e4b8c] w-56 h-60 rounded-md px-3 pt-5 pb-3' style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.45)"}}>
        <img src={Image} alt='displayImage' className='h-40 w-52 rounded-md mb-2' />
        <p className='text-center text-white'>{heading}</p>
    </div>
  )
}

export default ProductsCard