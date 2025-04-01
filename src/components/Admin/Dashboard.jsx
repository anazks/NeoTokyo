import React from 'react';
import './Dashboard.css';
import { FaUsers, FaShoppingCart, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="Admin" className="avatar" />
          <span>Admin User</span>
        </div>
      </header>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon users">
            <FaUsers />
          </div>
          <div className="stat-details">
            <h3>Total Users</h3>
            <p className="stat-number">1,254</p>
            <p className="stat-change positive">+12% from last month</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orders">
            <FaShoppingCart />
          </div>
          <div className="stat-details">
            <h3>New Orders</h3>
            <p className="stat-number">342</p>
            <p className="stat-change positive">+8% from last month</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon revenue">
            <FaMoneyBillWave />
          </div>
          <div className="stat-details">
            <h3>Revenue</h3>
            <p className="stat-number">$24,580</p>
            <p className="stat-change positive">+15% from last month</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon growth">
            <FaChartLine />
          </div>
          <div className="stat-details">
            <h3>Growth</h3>
            <p className="stat-number">27%</p>
            <p className="stat-change negative">-3% from last month</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="content-section">
          <h2>Recent Orders</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#ORD-1234</td>
                <td>John Smith</td>
                <td>Mar 28, 2025</td>
                <td>$120.50</td>
                <td><span className="status-badge completed">Completed</span></td>
              </tr>
              <tr>
                <td>#ORD-1235</td>
                <td>Sarah Johnson</td>
                <td>Mar 27, 2025</td>
                <td>$285.00</td>
                <td><span className="status-badge processing">Processing</span></td>
              </tr>
              <tr>
                <td>#ORD-1236</td>
                <td>Michael Davis</td>
                <td>Mar 26, 2025</td>
                <td>$95.20</td>
                <td><span className="status-badge pending">Pending</span></td>
              </tr>
              <tr>
                <td>#ORD-1237</td>
                <td>Emily Wilson</td>
                <td>Mar 25, 2025</td>
                <td>$345.75</td>
                <td><span className="status-badge completed">Completed</span></td>
              </tr>
              <tr>
                <td>#ORD-1238</td>
                <td>Robert Brown</td>
                <td>Mar 24, 2025</td>
                <td>$78.60</td>
                <td><span className="status-badge cancelled">Cancelled</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="content-section">
          <h2>Popular Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image" style={{backgroundColor: "#e3f2fd"}}></div>
              <h3>Wireless Headphones</h3>
              <p>$129.99</p>
              <div className="product-stats">
                <span>132 sales</span>
                <span>★★★★☆</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundColor: "#fff3e0"}}></div>
              <h3>Smart Watch</h3>
              <p>$249.99</p>
              <div className="product-stats">
                <span>98 sales</span>
                <span>★★★★★</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundColor: "#e8f5e9"}}></div>
              <h3>Bluetooth Speaker</h3>
              <p>$79.99</p>
              <div className="product-stats">
                <span>87 sales</span>
                <span>★★★★☆</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundColor: "#f3e5f5"}}></div>
              <h3>Wireless Charger</h3>
              <p>$45.99</p>
              <div className="product-stats">
                <span>76 sales</span>
                <span>★★★★☆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;