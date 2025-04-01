import React, { useEffect, useState } from 'react'
import './settings.css'
import Tax from '../Tax/Tax';
import {getBrand} from '../../../Services/Settings'
function Settings() {
  // State for popup visibility
  const [showBrandPopup, setShowBrandPopup] = useState(false);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [brands, setBrands] = useState([]);
  
  // State for form data
  const [brandName, setBrandName] = useState('');
  const [categoryData, setCategoryData] = useState({
    name: '',
    description: '',
    parent: ''
  });
  const fetchBrands = async () => {
    try {
      // Fixed: Added await and assumed getBrand is a function that needs to be called
      const brands = await getBrand();
      console.log(brands,'brands')
      setBrands(brands);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };
  useEffect(() => {
    // Created wrapper function since useEffect callback shouldn't be async directly
    const loadData = () => {
      fetchBrands();
    };
    loadData();
    
  }, []);
  

  // Sample data for brands and categories
  
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', description: 'Electronic devices', parent: null },
    { id: 2, name: 'Smartphones', description: 'Mobile phones', parent: 1 },
    { id: 3, name: 'Clothing', description: 'Apparel and fashion', parent: null },
    { id: 4, name: 'Men\'s Wear', description: 'Clothing for men', parent: 3 }
  ]);
  
  // Function to find parent category name by id
  const getParentCategoryName = (parentId) => {
    if (!parentId) return 'None';
    const parent = categories.find(cat => cat.id === parentId);
    return parent ? parent.name : 'Unknown';
  };

  // Handler functions for form submission
  const handleBrandSubmit = (e) => {
    e.preventDefault();
    const newBrand = {
      id: brands.length + 1, // Simple ID generation for demo
      name: brandName
    };
    setBrands([...brands, newBrand]);
    setBrandName('');
    setShowBrandPopup(false);
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      id: categories.length + 1, // Simple ID generation for demo
      name: categoryData.name,
      description: categoryData.description,
      parent: categoryData.parent ? parseInt(categoryData.parent) : null
    };
    setCategories([...categories, newCategory]);
    setCategoryData({ name: '', description: '', parent: '' });
    setShowCategoryPopup(false);
  };

  // Handler for input changes
  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategoryData({
      ...categoryData,
      [name]: value
    });
  };

  // Handler for deleting a brand
  const handleDeleteBrand = (brandId) => {
    if (window.confirm('Are you sure you want to delete this brand?')) {
      setBrands(brands.filter(brand => brand.id !== brandId));
    }
  };

  // Handler for deleting a category
  const handleDeleteCategory = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      // Check if any category has this as a parent
      const hasChildren = categories.some(cat => cat.parent === categoryId);
      
      if (hasChildren) {
        alert('Cannot delete this category because it has subcategories. Please delete the subcategories first.');
        return;
      }
      
      setCategories(categories.filter(category => category.id !== categoryId));
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      
      {/* Brands Section */}
      <div className="settings-section">
        <div className="section-header">
          <h3>Brands</h3>
          <button 
            className="btn-add" 
            onClick={() => setShowBrandPopup(true)}
          >
            Add Brand
          </button>
        </div>
        
        {/* Brands Table */}
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.length > 0 ? (
                brands.map((brand) => (
                  <tr key={brand.id}>
                    <td>{brand.id}</td>
                    <td>{brand.name}</td>
                    <td>
                      <button 
                        className="btn-delete"
                        onClick={() => handleDeleteBrand(brand.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="no-data">No brands found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="settings-section">
        <div className="section-header">
          <h3>Categories</h3>
          <button 
            className="btn-add" 
            onClick={() => setShowCategoryPopup(true)}
          >
            Add Category
          </button>
        </div>
        
        {/* Categories Table */}
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Parent</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td>{getParentCategoryName(category.parent)}</td>
                    <td>
                      <button 
                        className="btn-delete"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">No categories found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Brand Popup */}
      {showBrandPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h3>Add New Brand</h3>
              <button 
                className="btn-close" 
                onClick={() => setShowBrandPopup(false)}
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleBrandSubmit}>
              <div className="form-group">
                <label htmlFor="brandName">Brand Name</label>
                <input
                  type="text"
                  id="brandName"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  required
                />
              </div>
              
              <div className="popup-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowBrandPopup(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-next">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category Popup */}
      {showCategoryPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h3>Add New Category</h3>
              <button 
                className="btn-close" 
                onClick={() => setShowCategoryPopup(false)}
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleCategorySubmit}>
              <div className="form-group">
                <label htmlFor="categoryName">Name</label>
                <input
                  type="text"
                  id="categoryName"
                  name="name"
                  value={categoryData.name}
                  onChange={handleCategoryChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="categoryDescription">Description</label>
                <textarea
                  id="categoryDescription"
                  name="description"
                  value={categoryData.description}
                  onChange={handleCategoryChange}
                  rows="3"
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="categoryParent">Parent Category</label>
                <select
                  id="categoryParent"
                  name="parent"
                  value={categoryData.parent}
                  onChange={handleCategoryChange}
                >
                  <option value="">None (Top Level Category)</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="popup-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowCategoryPopup(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-next">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Tax/>
    </div>
  );
}

export default Settings