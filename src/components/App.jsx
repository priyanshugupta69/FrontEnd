import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './header';
import Hero from './hero';
import Login from './login';
import Signup from './signup';
import Root from './RootLayout';
import Products from './Products';
import About from './about';
import { Route, createRoutesFromElements } from 'react-router-dom';
function App(){
    return (
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Root />}>
            <Route path = "/" element={<Header/>}>
              <Route index element={<Hero />} />
              <Route path="products" element={<Products />} />
              <Route path="about" element={<div><About/></div>} />
            
            
            </Route>
               
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path = "auth/google/home" element = {<div>google auth</div>}/>
      
          </Route>
      
        )
      )
     
     
     
    )
}
export default App