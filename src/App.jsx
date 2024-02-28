import React from 'react';
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; // 
import RootLayuot from './layout/Rootlayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sign from './pages/Sign';
import Error from './pages/Error';
import ShoppingCard from './pages/ShoppingCard';
import Product from './pages/Product';
import { Outlet } from 'react-router-dom';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import NavBar from './Navbar';
// import Home from './pages/Home';
// import About from '../pages/About';
// import RootLayuot from '../layout/Rootlayout';
import AllItems from './pages/AllItems';

const router = createBrowserRouter(
  
  createRoutesFromElements(
  <Route path="/" element={<RootLayuot/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Sign" element={<Sign />} />
      <Route path="ShoppingCard" element={<ShoppingCard />} />
      <Route path="Products" element={<Outlet/>} >
        <Route path=':ProductId' element={<Product/>}/>
      </Route>
      <Route path="Items" element={<Outlet/>} >
        <Route path=':ItemtId' element={<AllItems/>}/>
      </Route>
      <Route path="*" element={<Error />} />
  </Route>
  )
);


function App() {
  // const [count, setCount] = useState(0);

  return (
  <RouterProvider router={router}  />
  )
}

export default App
