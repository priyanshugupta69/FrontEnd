import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import "./index.css"
import Header from "./components/header.jsx"
import Hero from "./components/hero.jsx"
import Login from "./components/login.jsx"
import Signup from "./components/signup.jsx"
import Root from "./components/RootLayout.js"
import Products from "./components/Products.jsx"
import About from "./components/about.jsx"
const user = false;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

