'use client';
import React, { useEffect, useState } from 'react';
import { API_ENDPOINTS_SN } from '../utils/api-endpoints-sn';
import httpsn from '../utils/httpsn';
import ProductsSection from '../../../Components/product/productsSection';
import UpperSection from '../../../Components/product/upperSection';

const Products = ({ params }) => {
  const [productDataArray, setProductDataArray] = useState([]);

  const getAllProducts = async () => {
    try {
      const base_url = process.env.NEXT_PUBLIC_OC_REST_API_ENDPOINT;
      const api_url = `${base_url}${API_ENDPOINTS_SN.GET_ALL_PRODUCTS}`;
      console.log('get all api url', api_url);

      const response = await httpsn.get(api_url, {
        headers: {
          includeAuthorizationToken: false,
        },
      });
      console.log('get all product api success response', response);

      if (response.status === 200) {
        // console.log("get all product api success true response", response.data.popData);
        setProductDataArray(response.data);
      } else {
        // console.log("get all product api success false response", response.data);
      }
    } catch (error) {
      console.log('get all product api error', error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <section>
        <UpperSection />
        <section className='bg-yello-300 flex'>
          <div className='w-full lg:w-full px-4 sm:px-8 lg:px-0'>
            <ProductsSection
              productDataArray={productDataArray}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
