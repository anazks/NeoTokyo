import React, { useEffect, useState } from 'react';
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import './ViewProducts.css';
import { getAllProduct } from '../../../../Services/Products';
import BaseURL from '../../../../Static/Static';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../../Loader/Loader';


function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productData = await getAllProduct();
        console.log(productData, "products in admin");
        setProducts(productData);
      } catch (error) {
        console.log(error, "error while fetching data");
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleView = (productId) => {
    console.log(`View product ${productId}`);
    navigate(`/admin/products/${productId}`); // Navigate to detailed view


    // Add your view logic here
  };

  const handleEdit = (productId) => {
    console.log(`Edit product ${productId}`);
    // Add your edit logic here
  };

  const handleDelete = (productId) => {
    console.log(`Delete product ${productId}`);
    // Add your delete logic here
  };

  if (loading) return <Loader/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Product Inventory</h2>
        <button className="add-product-btn">Add New Product</button>
      </div>
      
      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id || product.id}>
                <td>
                  <img 
                    src={product.images?.[0]?.image ? BaseURL + product.images[0].image : "https://via.placeholder.com/150"} 
                    alt={product.name} 
                    className="product-image" 
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>RS.{product.mrp}</td>
                <td>{product.product_code}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => handleView( product.id)}>
                      <FiEye />
                    </button>
                    <button onClick={() => handleEdit(product.id)}>
                      <FiEdit2 />
                    </button>
                    <button onClick={() => handleDelete(product.id)}>
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewProducts;