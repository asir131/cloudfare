'use client'
import Image from "next/image";
import Product from "./products/page"
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';


export default function Home() {
  return (
    <>
    <Provider store={store}>
       <Product/>
    </Provider>
    
    </>
  );
}
