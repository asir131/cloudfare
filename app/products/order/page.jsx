"use client";
import { useState } from "react";
import axios from "axios";
import { redirect } from 'next/navigation'
import { HiOutlineBackspace } from "react-icons/hi2";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    product_ids: "",
    s_product_qty: "",
    c_phone: "",
    c_name: "",
    courier: "steadfast",
    address: "",
    cod_amount: "",
    delivery_charge: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://admin.refabry.com/api/public/order/create", formData);
      alert("Order Placed Successfully!");
      console.log(res.data);
    } catch (error) {
      alert("Failed to place order!");
      console.error(error);
    }
    redirect('/products')
  };

  return (
   <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen overflow-hidden ">
    <h1 className="text-white text-3xl font-[900] flex items-center justify-center mt-10"><HiOutlineBackspace className="mr-10 cursor-pointer" onClick={()=>{
      redirect('/products')
    }} size={25}/>
    Order the Product</h1>
     <form onSubmit={handleSubmit} className="max-w-xl bg-blue-100 mx-auto p-10 mt-10 shadow rounded-2xl  space-y-4">
      <input required name="c_name" placeholder="Customer Name" onChange={handleChange} className="border  rounded-xl p-2 w-full" />
      <input required name="c_phone" placeholder="Phone" onChange={handleChange} className="border rounded-xl p-2 w-full" />
      <input required name="address" placeholder="Address" onChange={handleChange} className="border rounded-xl p-2 w-full" />
      <select required name="courier" onChange={handleChange} className="border rounded-xl p-2 w-full">
        <option value="steadfast">Steadfast</option>
        <option value="pathao">Pathao</option>
      </select>
      <input required name="product_ids" placeholder="Product IDs (comma separated)" onChange={handleChange} className="border rounded-xl p-2 w-full" />
      <input   required name="s_product_qty" placeholder="Quantities (comma separated)" onChange={handleChange} className="border rounded-xl p-2 w-full" />
      <input required name="cod_amount" placeholder="COD Amount" onChange={handleChange} className="border rounded-xl p-2 w-full" />
      <input required name="delivery_charge" placeholder="Delivery Charge" onChange={handleChange} className="border rounded-xl p-2 w-full" />
      <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Place Order
      </button>
    </form>
   </div>
  );
}
