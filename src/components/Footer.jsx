import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="relative bottom-0 ">
                <div className="grid gap-5">
                    <div className="grid grid-cols-6 bg-white items-center">
                        <div className='grid pl-28 mt-7 gap-3'>
                            <Link
                                className="flex items-center gap-1 text-[#8CB7F5] font-bold text-2xl -translate-y-1.5 "
                                to="/"
                            >
                                <img src="/images/logo.png" alt="LOGO" />
                                Stockfish
                            </Link>
                            <p className='text-left text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta soluta consectetur et nulla? Fuga optio enim minima?</p>
                            <div className='flex gap-3 mt-2'>
                                <a href="https://www.facebook.com/profile.php?id=100009001212190">
                                    <img src="/images/facebook.svg" className='w-7' alt="" />
                                </a>
                                <a href="https://www.linkedin.com/in/mostapha-taha-106018239/">
                                    <img src="/images/linkedin.svg" className='w-7' alt="" />
                                </a>
                                <a href="https://github.com/M0staphaTaha">
                                    <img src="/images/github.svg" className='w-7' alt="" />
                                </a>
                                <a href="https://twitter.com/M0stapha_">
                                    <img src="/images/big-x.svg" className='w-7' alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='grid justify-center gap-1'>
                            <div className='flex justify-center items-center mb-4'>
                                <h2 className='font-bold'>Support</h2>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>API Status</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Documentayion</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Pricing</p>
                            </div>
                        </div>
                        <div className='grid justify-center gap-1'>
                            <div className='flex justify-center items-center mb-4'>
                                <h2 className='font-bold'>Company</h2>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>About</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Blog</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Jobs</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>press</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>partners</p>
                            </div>
                        </div>
                        <div className='grid justify-center gap-1'>
                            <div className='flex justify-center items-center mb-4'>
                                <h2 className='font-bold'>Solutions</h2>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Marketing</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Analytics</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Commerce</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Insights</p>
                            </div>
                        </div>
                        <div className='grid justify-center gap-1'>
                            <div className='flex justify-center items-center mb-4'>
                                <h2 className='font-bold'>Legal</h2>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Claim</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Privacy</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-400'>Terms</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 justify-center gap-2'>
                            <div className='flex justify-center items-center mb-4'>
                                <h2 className='font-bold'>Get App</h2>
                            </div>
                            <div className='flex justify-center'>
                                <Link to="/">
                                    <img src="/images/APP Store.png" alt="" />
                                </Link>
                            </div>
                            <div className='flex justify-center'>
                                <Link to="/">
                                    <img src="/images/google.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-gray-200 flex justify-center ">
                        <p>	&copy; 2024 <a className=' hover:text-sky-600 text-sky-800 font-bold' href="https://mostapha-taha.vercel.app">Mostapha Taha</a></p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;