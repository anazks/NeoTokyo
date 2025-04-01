import React, { useState } from 'react'
import './tax.css'

function Tax() {
  // State for tax data
  const [taxes, setTaxes] = useState([
    { id: 1, name: 'GST', rate: 18 },
    { id: 2, name: 'VAT', rate: 12 },
    { id: 3, name: 'Service Tax', rate: 15 },
    { id: 4, name: 'CGST', rate: 9 }
  ]);

  // State for the tax popup
  const [showTaxPopup, setShowTaxPopup] = useState(false);
  
  // State for form data
  const [taxData, setTaxData] = useState({
    name: '',
    rate: ''
  });

  // Handle input changes
  const handleTaxChange = (e) => {
    const { name, value } = e.target;
    setTaxData({
      ...taxData,
      [name]: value
    });
  };

  // Handle form submission
  const handleTaxSubmit = (e) => {
    e.preventDefault();
    
    // Validate rate is a number
    const rateValue = parseFloat(taxData.rate);
    if (isNaN(rateValue)) {
      alert('Tax rate must be a valid number');
      return;
    }
    
    // Create new tax object
    const newTax = {
      id: taxes.length > 0 ? Math.max(...taxes.map(tax => tax.id)) + 1 : 1,
      name: taxData.name,
      rate: rateValue
    };
    
    // Add to taxes array
    setTaxes([...taxes, newTax]);
    
    // Reset form and close popup
    setTaxData({ name: '', rate: '' });
    setShowTaxPopup(false);
  };

  // Handle tax deletion
  const handleDeleteTax = (taxId) => {
    if (window.confirm('Are you sure you want to delete this tax?')) {
      setTaxes(taxes.filter(tax => tax.id !== taxId));
    }
  };

  return (
    <div className="tax-container">
      <h2>Tax Management</h2>
      
      <div className="tax-section">
        <div className="section-header">
          <h3>Taxes</h3>
          <button 
            className="btn-add" 
            onClick={() => setShowTaxPopup(true)}
          >
            Add Tax
          </button>
        </div>
        
        {/* Tax Table */}
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tax Name</th>
                <th>Tax Rate (%)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {taxes.length > 0 ? (
                taxes.map((tax) => (
                  <tr key={tax.id}>
                    <td>{tax.id}</td>
                    <td>{tax.name}</td>
                    <td>{tax.rate}%</td>
                    <td>
                      <button 
                        className="btn-delete"
                        onClick={() => handleDeleteTax(tax.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data">No taxes found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tax Popup */}
      {showTaxPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h3>Add New Tax</h3>
              <button 
                className="btn-close" 
                onClick={() => setShowTaxPopup(false)}
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleTaxSubmit}>
              <div className="form-group">
                <label htmlFor="taxName">Tax Name (VAT, GST etc.) *</label>
                <input
                  type="text"
                  id="taxName"
                  name="name"
                  value={taxData.name}
                  onChange={handleTaxChange}
                  required
                  placeholder="Enter tax name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="taxRate">Tax Rate (in percentage %) *</label>
                <input
                  type="number"
                  id="taxRate"
                  name="rate"
                  value={taxData.rate}
                  onChange={handleTaxChange}
                  min="0"
                  step="0.01"
                  required
                  placeholder="Enter tax rate"
                />
              </div>
              
              <div className="popup-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowTaxPopup(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tax