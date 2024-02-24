'use client';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import UserContext from '../../Context/UserContext';
import ProductDetailsModel from './productDetailsModel';
import { ToastContainer, toast } from 'react-toastify';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoMdColorFilter } from "react-icons/io";

const ProductsSection = ({ productDataArray, type}) =>
{
  const { isAuthenticated } = useContext(UserContext);
  const [showProductModel, setShowProductModel] = useState(false);
  const [currentProductDetails, setCurrentProductDetails] = useState({});
  const [showCounterBar, setShowCounterBar] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});

  // console.log("syed itemsQuantity Obj", itemQuantities);

  const handleProductClick = async (product) => {
    setShowProductModel(!showProductModel);
    setCurrentProductDetails(product);
    // console.log("current product details", currentProductDetails);
  };

  const handleAddToCart = async (event, productId) => {
    const quantity = itemQuantities[productId] || 1;

    event.stopPropagation();

    if (isAuthenticated) {
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
    } else {
      toast.info('Please login to add items into cart', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  const toggleCounterBar = (event, productId) => {
    event.stopPropagation();

    setShowCounterBar([...showCounterBar, productId]);
  };

  const toggleItemQuantity = (event, productId, operation) => {
    event.stopPropagation();

    const currentQuantity = itemQuantities[productId] || 1;

    const newQuantity =
      operation === 'inc'
        ? currentQuantity + 1
        : Math.max(currentQuantity - 1, 1);

    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  return (
    <>
      {showProductModel && (
        <ProductDetailsModel
          currentProductDetails={currentProductDetails}
          popUpClose={() => setShowProductModel(!showProductModel)}
        />
      )}
      <section className='space-y-4'>
        {type !== 'TrandingProducts&PopularProducts' && (
          <div className='text-base 2xl:text-lg font-semibold flex justify-between xl:px-6 items-center'>
            <p className='hidden lg:block'>{productDataArray.length} Items Found</p>

            <div className='flex gap-x-2 text-sm 2xl:text-base items-center'>
              <p className='opacity-70'>Sort By:</p>
              <select
                name=''
                id=''
                className='outline-none cursor-pointer py-2 px-2 rounded-md'
              >
                <option value='Low'>Lawest Price</option>
                <option value='High'>Highest Price</option>
              </select>
            </div>
          </div>
        )}
        <section className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
          {productDataArray?.map((curItem, index) => {
            let productId = curItem.id;

            return (
                <div  key={index} onClick={() => handleProductClick(curItem)} className='border py-3 flex flex-col items-center justify-center'>
                  <section className='w-full mb-5 relative'>
                      <Image
                        src={curItem.image}
                        alt='text'
                        width={400}
                        height={400}
                        className='rounded-md w-full h-[100px] xsm:h-[150px] sm:h-[200px]  2xl:h-[300px] hover:scale-110 2xl:hover:scale-105 duration-300'
                      />

                    {showCounterBar.includes(productId) ? (
                        <div className='quantityContainer flex w-[200px] 2xl:w-[250px] justify-between p-4 rounded-[50px] bg-white shadow-xl cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-8'>
                          <FaMinus
                            className='text-xl 2xl:text-2xl font-bold inline cursor-pointer'
                            onClick={(event) =>
                              toggleItemQuantity(event, productId, 'dec')
                            }
                          />
                          <p className='text-xl 2xl:text-2xl font-bold'>
                            {itemQuantities[productId] || 1}
                          </p>
                          <FaPlus
                            className='text-xl 2xl:text-2xl font-bold inline cursor-pointer'
                            onClick={(event) =>
                              toggleItemQuantity(event, productId, 'inc')
                            }
                          />
                        </div>
                    ) : (
                      <button
                        onClick={(event) => toggleCounterBar(event, productId)}
                        className='bluebutton w-10 h-10 2xl:w-12 2xl:h-12 2xl:text-2xl rounded-full bg-[#02B290] text-white absolute bottom-0 right-0 transform -translate-x-1 -translate-y-1'
                      >
                        +
                      </button>
                    )}
                  </section>
                  <section className='w-full space-y-3 mt-4'>
                    <div className='w-full flex justify-around text-base 2xl:text-lg font-normal'>
                      <p>Rs. {curItem.price}</p>
                      <p>
                        {curItem.rating.rate} / {curItem.rating.count}
                      </p>
                    </div>
                    <p className='text-center text-base xsm:text-lg 2xl:text-xl'>
                      {curItem.title.slice(0, 25)}....
                    </p>
                    <div className='grid place-items-center pt-3'>
                      <button
                        onClick={(e) => handleAddToCart(e, productId)}
                        className='bg-[#02B290] text-sm xsm:text-lg lg:text-base 2xl:text-xl font-medium text-white pb-2 pt-2 px-4 xsm:px-6 rounded-[25px]'
                      >
                        Add to Cart
                      </button>
                    </div>
                  </section>
                </div>
            );
          })}
        </section>
      </section>
    </>
  );
};
export default ProductsSection;
