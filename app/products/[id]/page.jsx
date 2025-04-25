"use client";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import React from 'react';
import { fetchProducts } from '../../store/productSlice';
import AOS from "aos";
import "aos/dist/aos.css";





export default function ProductDetail({params}) {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  
  const [product, setProduct] = useState(null);
  const { id} = React.use(params);


  const dispatch = useDispatch();
  
const { products } = useSelector((state) => state.product);
console.log("products1",products);

useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const found = products?.data?.find((p) => String(p.id) === id);
        console.log("found",found);
        setProduct(found);
  
      
  }, [id,products]);
 if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    

<div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen overflow-hidden  '>
<div className='mt-20 mb-20'>
<div
  className=" p-6  max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
  data-aos="fade-up"
>
  
  <img
    className="w-full h-150 object-cover rounded-md mb-4"
    src={`https://admin.refabry.com/storage/product/${product.image}`}
    alt={product.name}
  />
  <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
  <p className="text-xl text-grey-700 font-semibold mb-2">৳{product.price}</p>
  <h2 className='font-bold text-2xl'>Description:</h2>
  <p className="text text-gray  mb-2">{product.short_desc}</p>
  
</div>
</div>
</div>
  );
}
