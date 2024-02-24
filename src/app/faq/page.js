'use client';
import React from 'react';
import { RxCaretUp } from 'react-icons/rx';
import FaqSectionDetails from './faqSectionDetails';

const Page = () => {
  const handleDivAction = (summaryDivId, upArrowIconId) => {
    const divref = document.getElementById(summaryDivId);
    const iconref = document.getElementById(upArrowIconId);

    divref.classList.toggle('hidden');
    iconref.classList.toggle('rotate-180');
  };

  return (
    <>
      <section className="bg-productimage py-24 2xl:py-28  flex flex-col justify-center items-center bg-center md:bg-left bg-no-repeat">
            <h1 className="text-[30px] 2xl:text-[34px] font-semibold text-center">
            Frequently Asked Questions
            </h1>
            <div className="flex justify-center items-center text-base 2xl:text-xl cursor-pointer space-x-2">
                <IoHomeOutline />
                <a href="/">Home</a>
                <IoChevronForward />
                <p className="font-bold">Faq</p>
            </div>
            </section>
      <section className='py-10'>
        <section className='w-full sm:w-[70%] lg:w-[50%] py-4 mx-auto'>
          {FaqSectionDetails.map((curItem, index) => (
            <div
              key={index}
              onClick={() =>
                handleDivAction(`summaryDiv_${index}`, `upArrowIcon_${index}`)
              }
              className='w-full bg-white px-4 border-b-[1px] border-solid border-[#efefef] overflow-hidden cursor-pointer'
            >
              <div className='flex items-center justify-between min-h-[10vh]'>
                <h5 className='text-base 2xl:text-lg font-semibold text-[#212121]'>
                  {curItem.title}
                </h5>
                <span className='w-[22px] h-[22px] rounded-full border-2 border-[#81878c] border-solid'>
                  <RxCaretUp
                    id={`upArrowIcon_${index}`}
                    className='md:text-xl lg:text-lg 2xl:text-xl  text-[#81878c] font-bold rotate-180'
                  />
                </span>
              </div>
              <div id={`summaryDiv_${index}`} className='hidden pb-2'>
                <p className='text-sm 2xl:text-base text-justify opacity-70'>{curItem.summary}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};
export default Page;
