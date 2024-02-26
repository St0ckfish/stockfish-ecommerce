import React from 'react';
// import NavBar from '../componentss/Navbar';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserProvider } from '../Context/CartContext';


function RootLayuot(){
    
    return(
        <UserProvider>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </UserProvider>
    )
}

export default RootLayuot;