import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Error = () => {
    return (
        <>
            <main className="grid h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 mb-9">
                <div className="text-center">
                    <p className="text-base font-semibold text-[#5182FD]">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to='/'
                            className="rounded-md bg-[#5182FD] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6a91f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                        <Link to="/contact" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
                
            </main>
        </>
    );
}

export default Error;