import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";
import UserContext from "../../Context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import SocialShareBox from './socialShareBox';
import Link from 'next/link';

const ProductDetailsModel = ({popUpClose, currentProductDetails}) =>
{
    const { isAuthenticated } = useContext(UserContext);
    const [productQuantity, setProductQuantity] = useState(1);
    const [showShareBox, setShowShareBox] = useState(false);

    const handleAddToCart = async () => {

    if (isAuthenticated)
    {
      toast.info("This feature is blocked by admin due to api error", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else
    {
      toast.info("Please login to add items into cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

    const handlePopUpClose = (e) =>
    {
      if(e.target.id === 'outerDiv')
      {
        popUpClose();
      }
    };

    const quantityIncrement = () =>
    {
      setProductQuantity(productQuantity + 1);
    }
    const quantityDecrement = () =>
    {
      productQuantity > 1 ? setProductQuantity(productQuantity - 1) : '';
    }

    console.log("current product details in product model", currentProductDetails);

  return (
    <>
        <section onClick={(e) => handlePopUpClose(e)} id='outerDiv' className="fixed py-2 lg:py-0 top-[40px] sm:top-0 left-0 w-screen h-screen bg-opacity-75 bg-black flex justify-center lg:items-center z-50 overflow-y-scroll">
          <section id='innerDiv' className="bg-white h-full rounded-lg p-4 pb-10 w-[96%] xl:w-[90%] space-y-6 overflow-y-scroll">
            <div className="w-full bg-yello-300 flex justify-end">
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none text-xl 2xl:text-2xl" onClick={() => popUpClose()} >X</button>
            </div>
            <section className='bg-yello-300 h-auto lg:flex justify-between space-y-6 lg:space-y-0'>
                <section className='bg-blu-300 lg:w-[45%] w-full'>
                  <Link href={`/product/${currentProductDetails.id}`}>
                    <Image src={currentProductDetails.image}
                     width='500' height='500' className='w-full h-[250px] xsm:h-[350px] sm:h-[450px] 2xl:h-[500px] rounded-2xl hover:scale-105 duration-300' alt={`${currentProductDetails.title} image`}
                     />
                  </Link>
                </section>
                <section className='bg-blu-300 w-full lg:w-[45%] space-y-6'>
                    <div className='space-y-2'>
                        <Link href={`/product/${currentProductDetails.id}`}>
                          <h1 className='text-2xl 2xl:text-3xl font-medium cursor-pointer hover:opacity-50'>{currentProductDetails.title}</h1>
                        </Link>
                        <p className='text-base 2xl:text-lg font-medium text-[#595959]'>{currentProductDetails.category}</p>
                        <h4 className='text-[22px] 2xl:text-2xl font-bold'>&#8377;{currentProductDetails.price}</h4>
                        <p className='text-sm 2xl:text-base font-medium text-[#f98f14]'> Rating / Itm Left:- {currentProductDetails.rating.rate} / {currentProductDetails.rating.count} </p>
                    </div>
                    <section className='space-y-2'>
                        <div className='bg-[#f3f5f9] text-base 2xl:text-lg font-semibold flex justify-center py-4 rounded-lg'>
                            <div className='w-[40%] flex justify-between items-center'>
                                <FaMinus className='inline cursor-pointer' onClick={quantityDecrement} />
                                {productQuantity}
                                <FaPlus className='inline cursor-pointer' onClick={quantityIncrement} />
                            </div>
                        </div>
                          <div onClick={handleAddToCart} className='bg-[#1BBA9B] py-4 rounded-lg text-white flex justify-center gap-x-4 hover:opacity-80 cursor-pointer'>
                              <FaShoppingCart className='text-2xl inline' />
                              <span className='text-base 2xl:text-2xl font-semibold'>Add to Cart</span>
                          </div>
                        <section className='relative'>
                          <div onClick={() => setShowShareBox(!showShareBox)} className='bg-white py-4 rounded-lg flex justify-center gap-x-4 hover:opacity-80 cursor-pointer border-2 border-solid border-[#dee5ea]'>
                              <IoMdShare className='text-2xl inline' />
                              <span className='text-base 2xl:text-2xl font-semibold'>Share</span>
                          </div>
                          <SocialShareBox showShareBox={showShareBox} productDetails={currentProductDetails} />
                        </section>
                    </section>

                    <section className='space-y-2'>
                        <div className=' space-x-2'>
                            <IoPricetagOutline className='text-2xl inline' />
                            <span className='text-base 2xl:text-2xl font-semibold'>Tags: </span>
                        </div>
                        <div className='bg-re-300 pt-2 pb-24 sm:pb-16 2xl:pb-2'>
                            <h3 className='text-base 2xl:text-lg font-semibold '>Product Details: </h3>
                            <p className='text-sm 2xl:text-base text-[#595959] '>{currentProductDetails.description.slice(0, 200)}....</p>
                        </div>
                    </section>
                </section>
            </section>
          </section>
        </section>
    </>
  );
};
export default ProductDetailsModel;
