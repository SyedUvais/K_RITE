'use client';
import React, { useEffect, useState } from 'react';
import ProductsSection from '../product/productsSection';
import { API_ENDPOINTS_SN } from '../../src/app/utils/api-endpoints-sn';
import httpsn from '../../src/app/utils/httpsn';

const TrandingProducts = () => {
  const [productDataArray, setProductDataArray] = useState([]);
  console.log('TrandingProducts product array', productDataArray);

  const getTrandingProducts = async () => {
    try {
      const base_url = process.env.NEXT_PUBLIC_OC_REST_API_ENDPOINT;
      const api_url = `${base_url}${API_ENDPOINTS_SN.GET_TRANDING_PRODUCTS}`;
      console.log('TrandingProducts api url', api_url);

      const response = await httpsn.get(api_url, {
        headers: {
          includeAuthorizationToken: false,
        },
      });
      console.log('TrandingProducts product api success response', response);

      if (response.status === 200) {
        // console.log("TrandingProducts product api success true response", response.data.popData);
        setProductDataArray(response.data.slice(0, 10));
      } else {
        // console.log("TrandingProducts product api success false response", response.data);
      }
    } catch (error) {
      console.log('TrandingProducts product api error', error);
    }
  };

  useEffect(() => {
    getTrandingProducts();
  }, []);

  return (
    <section className='w-full h-auto mt-16 sm:mt-28 mb-12 px-4 sm:px-10 space-y-10 sm:space-y-16'>
      <div className='text-center space-y-2'>
        <h2 className='text-3xl 2xl:text-4xl font-bold'>
          Most tranding products near you
        </h2>
        <p className='text-lg leading-7 lg:text-xl 2xl:text-2xl'>
          We provide best quality & best price items near your location
        </p>
      </div>
        <ProductsSection
          productDataArray={productDataArray}
          type={'TrandingProducts&PopularProducts'}
        />
    </section>
  );
};

export default TrandingProducts;
