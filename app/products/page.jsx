'use client'
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import { fetchProducts } from '../store/productSlice.js';
import AOS from 'aos';
export default function Home() {
  
 
useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
console.log("products from all",products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  
  return (
    



  <div className="relative bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen text-white px-6 py-20 overflow-hidden">
  
  <div className="max-w-7xl mx-auto text-center z-10 relative">
    <h1 data-aos="fade-down" className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
      Discover Your Perfect Style
    </h1>
    <p data-aos="fade-up" className="text-lg md:text-xl mb-6">
      Handpicked collections to match every vibe and occasion.
    </p>
    <Link href="#products">
    <button
  data-aos="zoom-in"
  data-aos-duration="800"
  className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-800 ease-in-out transform hover:scale-105"
>
  Explore Now
</button>

    </Link>
  </div>

  
  <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/your-background-image.jpg')] bg-cover bg-center pointer-events-none"></div>

 
  <div id="products" className="mt-20">
    <h2
      data-aos="fade-down"
      className="text-3xl md:text-4xl font-bold text-center text-white mb-30"
    >
      Choose Your Favourite Style
    </h2>

    <div data-aos="zoom-in-up" className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products?.data?.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div
            data-aos="fade-up"
            className="bg-   border rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
          >
            <img
              src={`https://admin.refabry.com/storage/product/${product.image}`}
              alt={product.name}
              className="h-110 w-full object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-white-800 mb-1">{product.name}</h2>
            <p className="text-white-600 font-bold" >
              Price: <span className="font-bold text-white">৳{product.price}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

  );
}
