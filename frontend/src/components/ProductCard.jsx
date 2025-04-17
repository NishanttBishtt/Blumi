
import React from 'react'

function ProductCard({product}) {
    return (
        <div className='border border-zinc-900 p-5 rounded-xl'>
            <img className='w-full h-40 rounded-md object-cover object-center' src={product.imageUrl} alt="" />
            <h3 className='mt-3 text-lg tracking-tight font-bold'>{product.title}</h3>
            <p className='text-zinc-800 mt-2 font-semibold'>{product.description}</p>
            <p className='mt-4 font-semibold text-lg'>{product.price}</p>
            <button className='cursor-pointer hover:bg-green-700 bg-green-500 text-white px-3 py-2 rounded-lg mt-3'>Click to buy</button>
        </div>
    )
}

export default ProductCard
