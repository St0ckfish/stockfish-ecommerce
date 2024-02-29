import React from 'react';

const About = () => {
    return ( 
        <>
            <div className='grid grid-cols-2 justify-center h-[1000px] items-center max-[1505px]:grid-cols-1'>
                <div className='text-start grid justify-center items-center'>
                    <h1 className='m-5 text-[27px] font-bold'>Our Story</h1>
                    <p className='m-5'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense <br />in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,<br /> Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='m-5'>Exclusive has more than 1 Million products to offer, growing at a very fast. <br /> Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className='flex justify-center'>
                    <img className='h-[500px] max-[748px]:h-[400px] rounded-lg' src="/images/ecommerceimg.avif" alt="" />
                </div>
            </div>
        </>
    );
}

export default About;