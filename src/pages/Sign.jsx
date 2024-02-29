import React from 'react';

const Sign = () => {
    return ( 
        <>
            <div className='flex items-center justify-between max-[1314px]:grid max-[1314px]:justify-center'>
                <div className='flex justify-center'>
                    <img className='max-[815px]:w-[600px] max-[624px]:w-[400px]' src="/images/Side Image.png" alt="" />
                </div>
                <div className='grid mr-[300px] justify-center max-[1634px]:mr-[100px] max-[1434px]:mr-[0px] mb-10 mt-10'>
                    <h1 className='text-[27px] font-bold'>Create an account</h1>
                    <p>Enter your details below</p>
                    <form>
                    <div className='grid gap-11 mt-7 justify-center'>
                                <div className='flex gap-4 justify-center'>
                                    <input id="firstName" name="firstName" required className='w-[500px] max-[520px]:w-[300px] bg-[#F8FAFC] outline-none border-solid border-black border-[1px] border-t-0 border-r-0 border-l-0 p-2 ' placeholder='Name' type="text" />
                                
                                </div>
                                <div className='flex gap-4 justify-center'>
                                    <input id="email" name="email"  required className='w-[500px] max-[520px]:w-[300px] bg-[#F8FAFC] outline-none border-solid border-black border-[1px] border-t-0 border-r-0 border-l-0 p-2 ' placeholder='Email' type="email" />
                                </div>
                                <div className='flex justify-center'>
                                    <input id="message" name="message" required className='bg-[#F8FAFC] max-[520px]:w-[300px] w-[500px]  outline-none border-solid border-black border-[1px] border-t-0 border-r-0 border-l-0 p-2 ' placeholder='Password' type="password" />
                                </div>
                                <div className='flex justify-center'>
                                    <input className=' cursor-pointer px-10 py-4 bg-[#4086e9] rounded-lg text-white' type="submit" value="Create Account" />
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Sign;