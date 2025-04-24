'use client'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../utils/api.js';
import Link from 'next/link';
import { fetchProducts } from '../store/productSlice.js';

export default function Home() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   api.get('/all/product/get')
  //     .then(res => setProducts(res.data.data))
  //     .catch(err => console.error(err));
  // }, []);

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
console.log("products from all",products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="p-4 grid grid-cols-1   md:grid-cols-4 gap-6 place-items-center">
      
      {products?.data?.map((product) =>( 
       
        
       <Link key={product.id} href={`/products/${product.id}`}>
          <div  className="border p-4  rounded cursor-pointer hover:shadow-lg">
          
            <img
              src={`https://admin.refabry.com/storage/product/${product.image}`}
              alt={product.name}
              className="h-100 w-80 object-cover mb-2"
            />
            <h2 className="font-bold">{product.name}</h2>
            <p>Price: ৳{product.price}</p>
          </div>
         
      </Link>
      
      ))}
      
    </div>
  );
}
