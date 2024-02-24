'use client';
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiShow, BiHide } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import UserContext from '../../../Context/UserContext';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { login } = useContext(UserContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [emailErrorMsg, setemailErrorMsg] = useState('');
  const [passwordErrorMsg, setpasswordErrorMsg] = useState('');
  const [loginButtonDisability, setloginButtonDisability] = useState(true);
  const [userData, setUserData] = useState({
    emailField: '',
    passField: '',
  });

  const showPasswordFun = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    setUserData({
      ...userData,
      [fieldName]: fieldValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let emailVerified = false;
    // Regular expression pattern for validating email addresses
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Use the test() method to check if the email matches the pattern
    let mail_validation = pattern.test(userData.emailField);

    !userData.emailField.length
      ? setemailErrorMsg('this field can not be empty')
      : !mail_validation
        ? setemailErrorMsg('invalid email id')
        : (setemailErrorMsg(''), (emailVerified = true));

    let passwordVerified = false;
    if (userData.passField.length == 0) {
      setpasswordErrorMsg('this field can not be empty');
    } else if (userData.passField.length < 8) {
      setpasswordErrorMsg('password is too short: min character 8');
    } else if (userData.passField.length > 15) {
      setpasswordErrorMsg('password is too long: max character 15');
    } else {
      setpasswordErrorMsg('');
      passwordVerified = true;
    }

    if (emailVerified && passwordVerified) {
      if (userData.emailField === 'uvaishasan7866@gmail.com' && userData.passField === 'K_RITE@2024') {
        toast.success('Logged in Successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        login('Token_123456789');
        router.push('/');
      }
      else
      {
        toast.error('email or password is incorrect', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast.error('invalid username or password', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <>
      <section className='bg-yello-300 py-5 flex justify-center'>
        <div className='w-[96%] sm:w-[60%] md:w-[96%] lg:w-[80%] shadow-[0_0_10px_0_rgba(0,0,0,0.3)] flex'>
          <section className='lg:w-[60%] hidden md:block'>
            <Image
              src='https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              width='400'
              height='400'
              alt='login image'
              className='w-full h-full rounded-s-lg'
            />
          </section>
          <section className='lg:w-[40%] bg-white  py-10 px-6 2xl:px-10 rounded-e-lg'>
            <section className='space-y-6'>
              <div className='flex justify-center'>
                <Image
                  src='/NavBarImages/Logo.png'
                  width='100'
                  height='100'
                  alt='ShopNow logo'
                  className=''
                />
              </div>
              <h1 className='text-3xl 2xl:text-4xl font-medium text-[#333333] text-center'>
                Welcome Back!
              </h1>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <label htmlFor=''>
                  <input
                    type='email'
                    name='emailField'
                    id='emailField'
                    onChange={handleChange}
                    value={userData.emailField}
                    placeholder='Email'
                    className='w-full h-[8vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4'
                  />
                  <p className='text-xs 2xl:text-sm text-[#f91c1c] font-medium'>
                    {emailErrorMsg}
                  </p>
                </label>
                <label htmlFor='' className='flex relative items-center'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='passField'
                    id='passField'
                    onChange={handleChange}
                    value={userData.passField}
                    placeholder='Password'
                    className='w-full h-[8vh] rounded-md border-[1px] border-solid border-[#dcdcdc] px-4'
                  />
                  {showPassword ? (
                    <BiShow
                      className='absolute right-4 text-xl 2xl:text-2xl cursor-pointer'
                      onClick={showPasswordFun}
                    />
                  ) : (
                    <BiHide
                      className='absolute right-4 text-xl 2xl:text-2xl cursor-pointer'
                      onClick={showPasswordFun}
                    />
                  )}
                </label>
                <p className='text-xs 2xl:text-sm text-[#f91c1c] font-medium'>
                  {passwordErrorMsg}
                </p>

                <div className='space-y-4'>

                  <div className='space-x-4 flex items-center'>
                    <input
                      type='checkbox'
                      name='privacyPolicy'
                      id='privacyPolicy'
                      onClick={() =>
                        setloginButtonDisability(!loginButtonDisability)
                      }
                      className='w-[40px] h-[40px]'
                    />
                    <span className='text-xs 2xl:text-sm text-[#9a9a9a]'>
                      I read and understand all ShopNow&apos;s Terms of Use with Privacy Policy and end user License Agreement and give my concern for it.
                    </span>
                  </div>
                </div>
                <div className='pt-6'>
                  <button
                    disabled={loginButtonDisability}
                    className='w-full h-[8vh] text-white text-lg 2xl:text-xl rounded-md'
                    style={
                      loginButtonDisability
                        ? { backgroundColor: '#02b290', opacity: '0.4' }
                        : { backgroundColor: '#02b290' }
                    }
                  >
                    Login
                  </button>
                </div>
              </form>

              <div>
                <p className='text-sm 2xl:text-base text-[#9a9a9a] text-center'>
                  Don&apos;t have an account ?{' '}
                  <Link href='/login' className='text-blue-500 underline'>
                    Signup
                  </Link>
                </p>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
export default Page;
