import React, { useState } from 'react';
import ProductCard from './ProductCard';
import mockProducts from '../data/mockData';
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdOutlineArrowDropDown } from "react-icons/md";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  function toggleCategory() {
    setShowCategory(!showCategory)
  }
  return (
    <div className="w-full ">
      <nav className='px-10 py-3 flex justify-between items-center fixed top-0 left-0 w-full bg-[#F5F5F5] z-50 shadow-md'>
        <div className="nav-left">
          <h1 className=" lg:text-3xl md:text-2xl text-xl font-semibold tracking-wide">
            Blu<span className="text-green-600">mi</span>
          </h1>
        </div>
        <div className="nav-right sm:flex items-center space-x-6 hidden ">
          <Link to="/" className='lg:text-md md:text-sm font-medium transition-all duration-300 ease-in-out hover:bg-zinc-300/40 px-3 py-2 hover:rounded-md' >Home</Link>
          <Link to="/About" className='lg:text-md md:text-sm font-medium transition-all duration-300 ease-in-out hover:bg-zinc-300/40 px-3 py-2 hover:rounded-md' >About</Link>
          <div className='relative'>
          <h3 onClick={toggleCategory} className='lg:text-md md:text-sm cursor-pointer font-medium transition-all duration-300 ease-in-out flex items-center hover:bg-zinc-300/40 px-3 py-2 hover:rounded-md' >Categories<MdOutlineArrowDropDown /></h3>
          {showCategory && (
             <div className="absolute top-full mt-2 left-0 bg-[#F5F5F5] rounded shadow-md p-2 space-y-2 z-50">
              {["Men","Women","Kids"].map((item,index)=>(
                <motion.p
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="cursor-pointer hover:bg-zinc-200 px-4 py-1 rounded text-center"
              >
                {item}
              </motion.p>
              )) }
           </div>
          )}
          </div>
          <Link to="/Seller" className='lg:text-xl transition-all duration-300 ease-in-out md:text-lg text-green-600 pl-3 hover:text-green-800 font-semibold'>Become a seller</Link >
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
              <Link to="/" className="text-md font-medium " >Home</Link>
              <Link to="/About" className='text-md font-medium' >About</Link>
              <div className='relative w-full flex flex-col items-center'>

              <h3 onClick={toggleCategory} className="text-md flex items-center font-medium" >Categories<MdOutlineArrowDropDown /></h3>
              {showCategory && (
             <div className=" mt-2 w-full bg-zinc-300 rounded shadow-lg  flex flex-col items-center space-y-2 z-50">
              {["Men", "Women", "Kids"].map((item, index) => (
      <motion.p
        key={item}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="cursor-pointer hover:bg-zinc-200 px-4 py-1 rounded text-center"
      >
        {item}
      </motion.p>
    ))}
           </div>
          )}
              </div>
              <Link to="/Seller" className="text-green-600 text-lg font-semibold" onClick={() => setIsOpen(false)}>Become a seller</Link>

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
        {mockProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
      </div>
    </div>
  );
};

export default LandingPage;


