"use client";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { fetchProducts } from '../../store/productSlice';



export default function ProductDetail({params}) {


  
  const [product, setProduct] = useState(null);
  const { id} = params;
console.log("iddd",id);

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
 

  // useEffect(() => {
  //   api.get("/all/product/get")
  //     .then((res) => {
  //       const found = res.data.data.data.find((p) => String(p.id) === id);
  //       console.log("found",found);
  //       setProduct(found);
  //     })
  //     .catch((err) => console.error(err));
  // }, [id]);


  

  

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      
      <img className="bg-amber-900 h-50 w-50" src={`https://admin.refabry.com/storage/product/${product.image}`} alt="" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-green-700 mb-2">৳{product.price}</p>
      <p className="text-gray-700">ID: {product.id}</p>
    </div>
  );
}
