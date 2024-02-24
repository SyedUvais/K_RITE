"use client"
import React, { useEffect, useState, useContext } from 'react';
import { API_ENDPOINTS_SN } from '../../utils/api-endpoints-sn';
import httpsn from '../../utils/httpsn';
import Image from 'next/image';
import { IoHomeOutline, IoChevronForward } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import SocialShareBox from '../../../../Components/product/socialShareBox';
import UserContext from '../../../../Context/UserContext';

const Productdetails = ({params}) =>
{
  const product_slug = params.product_slug;
  const [product, setProduct] = useState(null);
  const { isAuthenticated } = useContext(UserContext);
  const [productQuantity, setProductQuantity] = useState(1);
  const [showShareBox, setShowShareBox] = useState(false);

  console.log("product details on prodect detais page", product);

  const getProductDetails = async () => {
    try {
      const base_url = process.env.NEXT_PUBLIC_OC_REST_API_ENDPOINT;
      const api_url = `${base_url}${API_ENDPOINTS_SN.GET_PRODUCT_DETAILS}/${product_slug}`;
      console.log('ProductDetails api url', api_url);

      const response = await httpsn.get(api_url, {
        headers: {
          includeAuthorizationToken: false,
        },
      });
      console.log('ProductDetails product api success response', response);

      if (response.status === 200) {
        // console.log("ProductDetails product api success true response", response.data.popData);
        setProduct(response.data);
      } else {
        // console.log("ProductDetails product api success false response", response.data);
      }
    } catch (error) {
      console.log('ProductDetails product api error', error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

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

    const quantityIncrement = () =>
    {
      setProductQuantity(productQuantity + 1);
    }
    const quantityDecrement = () =>
    {
      productQuantity > 1 ? setProductQuantity(productQuantity - 1) : '';
    }

  if (!product) {
    // Handle loading state or product not found
    return <div>Loading...</div>;
  }

  return (
      <section className="py-4 space-y-10 px-4 lg:px-10">
        <div className='flex items-center gap-x-3'>
          <IoHomeOutline className='inline' /> Home <IoChevronForward className='inline' /> Products <IoChevronForward className='inline' /> {product_slug}
        </div>
        <section className='lg:flex justify-between space-y-6 lg:space-y-0'>
                <section className='bg-re-300 w-full lg:w-[45%]'>
                    <Image src={product.image}
                     width='500' height='500' className='w-full h-[250px] sm:h-[450px] rounded-2xl hover:scale-105 duration-300' alt={`${product_slug.title} image`}
                     />
                </section>
                <section className='bg-blu-300 w-full lg:w-[45%] space-y-6'>
                    <div className='space-y-2'>
                          <h1 className='text-2xl 2xl:text-3xl font-medium cursor-pointer hover:opacity-50'>{product.title}</h1>
                        <p className='text-base 2xl:text-lg font-medium text-[#595959]'>{product.quantity} {product.unit}</p>
                        <h4 className='text-[22px] 2xl:text-2xl font-bold'>&#8377;{product.price}</h4>
                        <p className='text-sm 2xl:text-base font-medium text-[#f98f14]'> Rating / Itm Left:- {product.rating.rate} / {product.rating.count} </p>
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
                          <SocialShareBox showShareBox={showShareBox} productDetails={product} />
                        </section>
                    </section>
                </section>
        </section>
        <div className='bg-re-300 py-2'>
          <h3 className='text-lg 2xl:text-xl font-bold'>Product Details: </h3>
          <hr className='mb-10' />
          <p className='text-sm 2xl:text-base text-[#595959] leading-7'>{product.description}</p>
        </div>
      </section>
  );
};

export default Productdetails;
