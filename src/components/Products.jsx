
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    // Filter products based on the search input value
    const filtered = products.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()) || item.category.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredProducts(filtered);
  }

  const handleCategoryFilter = (category) => {
    // Filter products based on the category
    if (!category || category === "ALL") {
      setFilteredProducts(products); // Display all products
    } else {
      const filtered = products.filter(item => item.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement an action when the submission button is clicked if necessary.
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
<>
<div className="flex justify-center items-center px-10 gap-1 mb-5 w-12/12">
    <button className="bg-violet-700 text-white px-12 rounded-xl py-2 hover:bg-violet-800" onClick={() => handleCategoryFilter("ALL")}>ALL</button>
    <button className="bg-violet-700 text-white px-12 rounded-xl py-2 hover:bg-violet-800" onClick={() => handleCategoryFilter("men's clothing")}>men</button>
    <button className="bg-violet-700 text-white px-12 rounded-xl py-2 hover:bg-violet-800" onClick={() => handleCategoryFilter("women's clothing")}>women</button>
    <button className="bg-violet-700 text-white px-12 rounded-xl py-2 hover:bg-violet-800" onClick={() => handleCategoryFilter("jewelery")}>jewelry</button>
    <button className="bg-violet-700 text-white px-12 rounded-xl py-2 hover:bg-violet-800" onClick={() => handleCategoryFilter("electronics")}>electronics</button>
  </div>
    <div className="grid grid-cols-4 bg-slate-100 gap-4" style={{ padding: '80px' }}>
     
    
    {filteredProducts.map(item => (
  <div className="border px-4 py-3 bg-white cursor-pointer hover:scale-[103%] transition-all rounded-xl items-center shadow-lg justify-center flex flex-col">
    <div className="">
      <img className="w-[80%] h-[200px] justify-center items-center text-center m-auto" src={item.image} alt={item.title} />
    </div>
    <div>
      <h3 className="px-4 py-4 items-center ">{item.title}</h3>
      <div className="grid grid-cols-2 justify-center items-center text-center px-1 gap-3 py-3">
        <span className="px-3 items-center gap-1 flex">{item.category}</span>
        <span className="px-3 justify-center items-center gap-1 flex">{item.price}<i className="ri-money-dollar-circle-line"></i></span>
        <span className=" px-3 justify-center items-center gap-1 flex">{item.rating.rate}
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-fill"></i>
        </span>
      </div>
    </div>
   <div className="flex justify-between gap-1">
   <button className="bg-violet-700 text-white px-3  py-[5px] cursor-pointer hover:bg-violet-800 rounded-xl">View Deatails</button>
    <button className="bg-violet-700 text-white px-3 py-[5px] cursor-pointer hover:bg-violet-800 rounded-xl">Add To Card</button>
   </div>
  </div>
))}

    
    </div>
</>
  );
}

export default Products;
