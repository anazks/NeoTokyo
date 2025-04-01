import React from 'react';
import { FiPackage, FiUser, FiCreditCard, FiTruck, FiHome, FiClock, FiCheckCircle } from 'react-icons/fi';
import './order.css';

function Order() {
  // Sample order data
  const order = {
    id: 'ORD-2023-00145',
    date: '2023-05-15',
    status: 'Delivered',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    totalAmount: 187.94,
    user: {
      id: 'USR-001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567'
    },
    shippingAddress: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    billingAddress: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    items: [
      {
        id: 'PRD-001',
        name: 'Wireless Headphones',
        image: 'https://via.placeholder.com/80',
        price: 129.99,
        quantity: 1,
        subtotal: 129.99
      },
      {
        id: 'PRD-002',
        name: 'Phone Case',
        image: 'https://via.placeholder.com/80',
        price: 19.99,
        quantity: 2,
        subtotal: 39.98
      },
      {
        id: 'PRD-003',
        name: 'Screen Protector',
        image: 'https://via.placeholder.com/80',
        price: 9.99,
        quantity: 2,
        subtotal: 19.98
      }
    ],
    shippingMethod: 'Express Shipping',
    shippingCost: 15.00,
    tax: 12.99,
    trackingNumber: 'EX123456789US',
    estimatedDelivery: '2023-05-18',
    actualDelivery: '2023-05-17'
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <span className="status-badge delivered"><FiCheckCircle /> Delivered</span>;
      case 'shipped':
        return <span className="status-badge shipped"><FiTruck /> Shipped</span>;
      case 'processing':
        return <span className="status-badge processing"><FiClock /> Processing</span>;
      default:
        return <span className="status-badge pending">Pending</span>;
    }
  };

  const getPaymentBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return <span className="payment-badge paid"><FiCreditCard /> Paid</span>;
      case 'pending':
        return <span className="payment-badge pending"><FiClock /> Pending</span>;
      case 'failed':
        return <span className="payment-badge failed">Failed</span>;
      default:
        return <span className="payment-badge unpaid">Unpaid</span>;
    }
  };

  return (
    <div className="order-container">
      <div className="order-header">
        <h1>Order Details</h1>
        <div className="order-meta">
          <div className="order-id">Order #: {order.id}</div>
          <div className="order-date">Date: {order.date}</div>
        </div>
      </div>

      <div className="order-status-section">
        <div className="status-card">
          <h3>Order Status</h3>
          {getStatusBadge(order.status)}
          {order.status.toLowerCase() === 'delivered' && (
            <div className="delivery-date">Delivered on: {order.actualDelivery}</div>
          )}
          {order.status.toLowerCase() === 'shipped' && (
            <div className="tracking-info">
              <div>Tracking #: {order.trackingNumber}</div>
              <div>Estimated Delivery: {order.estimatedDelivery}</div>
            </div>
          )}
        </div>

        <div className="payment-card">
          <h3>Payment Information</h3>
          {getPaymentBadge(order.paymentStatus)}
          <div className="payment-details">
            <div>Method: {order.paymentMethod}</div>
            <div>Total: ${order.totalAmount.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <div className="order-details-grid">
        <div className="customer-info">
          <h3><FiUser /> Customer Information</h3>
          <div className="info-card">
            <div className="info-row">
              <strong>Name:</strong> {order.user.name}
            </div>
            <div className="info-row">
              <strong>Email:</strong> {order.user.email}
            </div>
            <div className="info-row">
              <strong>Phone:</strong> {order.user.phone}
            </div>
          </div>
        </div>

        <div className="shipping-info">
          <h3><FiTruck /> Shipping Address</h3>
          <div className="info-card">
            <div>{order.shippingAddress.street}</div>
            <div>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</div>
            <div>{order.shippingAddress.country}</div>
          </div>
        </div>

        <div className="billing-info">
          <h3><FiCreditCard /> Billing Address</h3>
          <div className="info-card">
            <div>{order.billingAddress.street}</div>
            <div>{order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zipCode}</div>
            <div>{order.billingAddress.country}</div>
          </div>
        </div>
      </div>

      <div className="order-items">
        <h3><FiPackage /> Order Items</h3>
        <table className="items-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id}>
                <td className="product-cell">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <span>{item.name}</span>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${item.subtotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="order-summary">
        <div className="summary-card">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${(order.totalAmount - order.tax - order.shippingCost).toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>${order.shippingCost.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax:</span>
            <span>${order.tax.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${order.totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;