// import React from 'react';

// const ProductCard = ({ product }) => {
//   const { title, description, price, imageUrl, sellerPhoneNumber } = product;

//   const handleBuyNow = () => {
//     const whatsappLink = `https://wa.me/${sellerPhoneNumber}?text=Hi, I'm interested in your product "${title}"`;
//     window.open(whatsappLink, '_blank');
//   };

//   return (
//     <div className="border p-4 rounded-lg shadow-md">
//       <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />
//       <h3 className="text-lg font-bold mt-2">{title}</h3>
//       <p className="text-sm text-gray-500">{description}</p>
//       <p className="text-xl font-semibold mt-2">{price}</p>
//       <button
//         onClick={handleBuyNow}
//         className="bg-blue-500 text-white py-2 px-4 mt-3 rounded-lg"
//       >
//         Buy Now
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
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
