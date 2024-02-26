import React from 'react';
import HeroHome from '../components/HeroHome';
import OffersHome from '../components/OffersHome';
import  { createContext, useState } from 'react';
import { UserProvider } from '../Context/CartContext';

const Home = () => {
    return ( 
        <UserProvider>
            <HeroHome/>
            <OffersHome/>
        </UserProvider>
    );
}

export default Home;