import React, { useState } from 'react';
import './over.css';

function OverView() {
  const [categories, setCategories] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);
  const [showAddItemsModal, setShowAddItemsModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [newItemName, setNewItemName] = useState('');

  // Add a new category
  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory = {
        id: Date.now(),
        name: newCategoryName,
        items: []
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
      setShowCategoryModal(false);
      // Show the item modal for the newly added category
      setSelectedCategory(newCategory);
      setShowItemModal(true);
    }
  };

  // Add a new item to a category
  const handleAddItem = () => {
    if (newItemName.trim() && selectedCategory) {
      const updatedCategories = categories.map(category => {
        if (category.id === selectedCategory.id) {
          return {
            ...category,
            items: [...category.items, {
              id: Date.now(),
              name: newItemName
            }]
          };
        }
        return category;
      });
      setCategories(updatedCategories);
      setNewItemName('');
      setShowItemModal(false);
    }
  };

  // Add an item through the Add Overview Items modal
  const handleAddItemFromSelect = () => {
    if (newItemName.trim() && selectedCategoryId) {
      const updatedCategories = categories.map(category => {
        if (category.id === parseInt(selectedCategoryId)) {
          return {
            ...category,
            items: [...category.items, {
              id: Date.now(),
              name: newItemName
            }]
          };
        }
        return category;
      });
      setCategories(updatedCategories);
      setNewItemName('');
      setSelectedCategoryId('');
      setShowAddItemsModal(false);
    }
  };

  // Open the item modal for a specific category
  const openItemModal = (category) => {
    setSelectedCategory(category);
    setShowItemModal(true);
  };

  // Open the add items modal
  const openAddItemsModal = () => {
    setNewItemName('');
    setSelectedCategoryId(categories.length > 0 ? categories[0].id.toString() : '');
    setShowAddItemsModal(true);
  };

  return (
    <div className="overview-container">
      <h2>Overview</h2>
      
      {/* Table of categories and items */}
      {categories.length > 0 ? (
        <div className="table-container">
          <table className="overview-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Attributes/Items</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>
                    <div className="items-container">
                      {category.items.map(item => (
                        <span key={item.id} className="item-badge">
                          {item.name}
                        </span>
                      ))}
                      {category.items.length === 0 && (
                        <span className="no-items">No items added</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <button 
                      className="btn btn-sm" 
                      onClick={() => openItemModal(category)}
                    >
                      Add Item
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">No categories added yet</div>
      )}
      
      {/* Action Buttons */}
      <div className="action-buttonss">
        <button 
          className="btn-new btn-primary" 
          onClick={() => setShowCategoryModal(true)}
        >
          Add Overview Category
        </button>
        
        <button 
          className="btn-new btn-secondary" 
          onClick={openAddItemsModal}
          disabled={categories.length === 0}
        >
          <strong>Add Overview Items</strong>
        </button>
      </div>
      
      {/* Add Category Modal */}
      {showCategoryModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Category</h3>
            <div className="form-group">
              <label>Category Name:</label>
              <input 
                type="text" 
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Enter category name"
              />
            </div>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowCategoryModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Item Modal (from category) */}
      {showItemModal && selectedCategory && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Item</h3>
            <div className="form-group">
              <label>Category:</label>
              <input 
                type="text" 
                value={selectedCategory.name} 
                disabled 
              />
            </div>
            <div className="form-group">
              <label>Attribute Name:</label>
              <input 
                type="text" 
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter attribute name"
              />
            </div>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowItemModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleAddItem}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Overview Items Modal (from button) */}
      {showAddItemsModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add Overview Item</h3>
            <div className="form-group">
              <label>Select Category:</label>
              <select 
                value={selectedCategoryId} 
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                className="select-dropdown"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Attribute Name:</label>
              <input 
                type="text" 
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter attribute name"
              />
            </div>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowAddItemsModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleAddItemFromSelect}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverView;