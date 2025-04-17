import React, { useState } from 'react';
import ProductCard from './ProductCard';
import mockProducts from '../data/mockData';
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';


function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full ">
      <nav className='px-10 py-3 flex justify-between items-center fixed top-0 left-0 w-full bg-[#F5F5F5] z-50 shadow-md'>
        <div className="nav-left">
          <h1 className=" lg:text-3xl md:text-2xl text-xl font-semibold tracking-wide">
            Blu<span className="text-green-600">mi</span>
          </h1>
        </div>
        <div className="nav-right sm:flex items-center space-x-6 hidden ">
          <a className='lg:text-md md:text-sm font-medium transition-all duration-300 ease-in-out hover:bg-zinc-300/40 px-3 py-2 hover:rounded-md' href="">Home</a>
          <a className='lg:text-md md:text-sm font-medium transition-all duration-300 ease-in-out hover:bg-zinc-300/40 px-3 py-2 hover:rounded-md' href="">Categories</a>
          <a href='' className='lg:text-xl transition-all duration-300 ease-in-out md:text-lg text-green-600 pl-3 hover:text-green-800 font-semibold'>Become a seller</a >
        </div>
        {/* Mobile menu dropdown */}
        <div className="sm:hidden cursor-pointer">{isOpen ? (
            <MdClose
              className="text-2xl"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <MdOutlineMenu
              className="text-2xl"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-zinc-300 shadow-md sm:hidden flex flex-col items-center px-10 py-4 z-[1] space-y-8"
            >
              <a className="text-md font-medium " href="">Home</a>
              <a className="text-md font-medium" href="">Categories</a>
              <a className="text-green-600 text-lg font-semibold" href="">Become a seller</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="hero pt-10 w-full h-170 relative bg-zinc-500">
        <div className="img w-full h-full">
          <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop" alt="" />
          <div className="overlay bg-black/50 absolute top-0 left-0 w-full h-full">
            <div className="hero-text z-10 my-40 max-w-200 space-y-7 mx-auto ">
              <h1 className='lg:text-7xl md:text-6xl sm:text-6xl text-5xl sm:leading-15 md:leading-15 text-white lg:leading-20 font-semibold text-center'>Sustainable Fashion, Redefined</h1>
              <p className='text-center sm:text-xl text-white font-semibold md:text-xl lg:text-2xl'>Discover unique pieces that tell a story</p>
              <div className="relative lg:w-180 mx-auto sm:w-140 md:px-10 w-90 px-10 sm:px-12 md:w-160 lg:px-6">
                <input
                  className="w-full bg-white rounded-full outline-none border-none py-4 pl-5 pr-10"
                  placeholder="Search for products"
                  type="text"
                />
                <CiSearch className="absolute lg:right-10 md:right-14 sm:right-17 right-14 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ProductCards mapping */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 py-10 ">
        {mockProducts.map((product) => (<ProductCard key={product.id} product={product}  />))}
     </div>
    </div>
  );
};

export default LandingPage;


