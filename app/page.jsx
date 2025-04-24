'use client'
import Image from "next/image";
import Product from "./products/page"
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import React from "react";

export default function Home() {
  return (
    <>
    {/* <React.StrictMode> */}
    {/* <Provider store={store} > */}
       <Product />
    {/* </Provider> */}
    {/* </React.StrictMode> */}
    
    </>
  );
}
