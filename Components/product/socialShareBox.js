"use client";
import React, {useState} from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  TwitterIcon,
} from 'react-share';

const SocialShareBox = ( {showShareBox, productDetails} ) =>
{
    const [clipboardText, setClipboardText] = useState('');
    const productUrl = ``

    const shareMsg = ``;

    const handleCopyClick = () => {
    navigator.clipboard.writeText(productUrl)
      .then(() => {
        setClipboardText('Text successfully copied to clipboard');
      })
      .catch(err => {
        setClipboardText('Unable to copy text to clipboard', err);
      });
  };

    return (
        <>
            <section className={`bg-white absolute z-10 right-0 sm:w-[300px] md:min-w-[400px] transition-all duration-300 ${
                              showShareBox ? 'visible opacity-100 bottom-[110%] lg:top-[110%]' : 'invisible opacity-0 bottom-[130%] lg:top-[130%]'
                            }`} >

                        <div className='space-y-4 sm:space-y-2 py-2 px-2 sm:px-4 border-2 border-solid rounded-lg'>
                            <section className='space-y-2'>
                              <p className='text-lg 2xl:text-xl font-medium text-[#1b1b1b]'>Share in social network</p>
                              <p className='text-sm 2xl:text-base font-medium text-[#1b1b1b]'>To reach the highest traffic view share this product</p>
                                <FacebookShareButton url={shareMsg} className="mr-5">
                                  <FacebookIcon
                                    size={40}
                                    round
                                    className="transition-all hover:opacity-90"
                                  />
                                </FacebookShareButton>
                                <TwitterShareButton url={shareMsg} className="mr-5">
                                  <TwitterIcon
                                    size={40}
                                    round
                                    className="transition-all hover:opacity-90"
                                  />
                                </TwitterShareButton>
                                <WhatsappShareButton url={shareMsg} separator=":: " className="mr-5">
                                  <WhatsappIcon
                                    size={40}
                                    round
                                    className="transition-all hover:opacity-90"
                                  />
                                </WhatsappShareButton>
                                <LinkedinShareButton url={shareMsg} className="mr-5">
                                  <LinkedinIcon
                                    size={40}
                                    round
                                    className="transition-all hover:opacity-90"
                                  />
                                </LinkedinShareButton>
                            </section>
                            <div className='flex'>
                            <input
                            type="text"
                            id="productUrl"
                            readOnly
                            value={productUrl}
                            className="rounded-r-none rounded-[10px] px-2 sm:px-4 py-2 border-2 border-r-0 border-black border-opacity-25 focus:outline-none  font-medium text-base text-[#7B808B]"
                            />
                            <button onClick={handleCopyClick} className='bg-[#1BBA9B] px-4 border- border-green-500  py-2 rounded-l-none rounded-[10px] text-white text-base'>Copy</button>
                            </div>
                            <p className='text-xs text-green-500 font-medium'>{clipboardText}</p>
                        </div>
            </section>
        </>
    )
};
export default SocialShareBox;