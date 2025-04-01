import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './producsList.css';
import { FaCartPlus } from "react-icons/fa6";
import { getAllProduct } from '../../../Services/Products';
import baseUrl from '../../../Static/Static'
import { useAuth } from '../../../Context/UserContext';
import { addTocart as addToCartService } from '../../../Services/userApi'; // Correct function import
import Filter from '../Filter/Filter';
import Sorting from '../Sorting/Sorting';
function ProductsList() {
  const [filter,setFilter] = useState(false)
  const [sort,setSort] = useState(false)

  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook to navigate
  const { user, setUser } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productData = await getAllProduct();
        console.log(productData, "products---");
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addTocart = async (id) => {
    try {
      console.log("working", user.data);
      console.log(id, "productid");
      let addToCart = await addToCartService(id); // Call the correct function here
      if (addToCart) {
        alert("Added to cart");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add to cart");
    }
  };

  return (
    <div>
      <br /><br />
      <br /><br />
      <br /><br />
      <div className="buttonContainer">
        <br /><br />
            <button className="special" onClick={()=>setFilter(filter?false:true)}>FILTERS</button>
            <button className="special" onClick={()=>setSort(filter?false:true)}>SORT</button> 
      </div>
      {
        sort ?
        <>
        <br /><br /><br /><br /> <br /><br />
        <Sorting/>
        </> : ""
      }
      {
      filter ?
     <>
      <br /><br /><br />  
      <Filter/>
     </>
      :
      ""
      }
      {/* <div className="sort">
        <div className="category">
          <h3>NEO TOKYO CERTIFIED</h3>
          <h3>BY BRAND</h3>
          <h3>CATEGORY</h3>
          <h3>PRICE</h3>
          <h3>AVAILABILITY</h3>
          <h3>RATING</h3>
          <h3>NEO TOKYO PRIORITY ONE FULFILLED</h3>
        </div>

        <div className="options">
          {[...Array(7)].map((_, index) => (
            <div key={index}>
              <select><option value="">option</option></select>
              <select><option value="">option</option></select>
              <select><option value="">option</option></select>
            </div>
          ))}
          <div style={{ marginTop: '10px' }}>
            <button className='apply'>APPLY</button>
          </div>
        </div>
      </div> */}

      <div className="products">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img 
              src={product.images?.[0]?.image ? baseUrl + product.images[0].image : "https://via.placeholder.com/150"} 
              alt={product.name} 
              onClick={() => navigate(`/Details/${product.id}`)} // Navigate to details page
              style={{ cursor: "pointer" }} // Make it clear it's clickable
            />
            <h2>{product.name}</h2>
            <p className="price">₹ {product.price?.toLocaleString()}</p>
            <div className="buttons">
              <span onClick={() => addTocart(product.id)}><FaCartPlus /> Add To Cart</span>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
