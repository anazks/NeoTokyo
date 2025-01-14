import React from "react";
import "./cartpage.css";
import "@fontsource/rajdhani"; // Default font weight
import "@fontsource/rajdhani/700.css"; // Optional: specific font weight (600)


const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "The Spectre Series",
      type: "Gaming PC",
      price: 260000,
      status: "In Stock",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "The Spectre Series",
      type: "Gaming PC",
      price: 260000,
      status: "In Stock",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Teenage Engineering MIDI",
      type: "Accessories",
      price: 50000,
      status: "Out of Stock",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 4,
      name: "Priority One",
      type: "Subscription",
      price: 6000,
      status: "In Stock",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 5,
      name: "Google One",
      type: "Software",
      price: 1300,
      status: "In Stock",
      image: "https://via.placeholder.com/80",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="cart-header">
        <div className="menu">
          <span>Products</span>
          <span>Solutions</span>
          <span>Store</span>
          <span>Support</span>
        </div>
        <div className="logo">🅰</div>
        <div className="cart-icon">
          Cart
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
          />
        </div>
      </header>

      {/* Content */}
      <div className="cart-content">
        {/* Cart Items */}
        <div className="cart-items">
          <h2>Your Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="item-image"
              />
              <div className="item-info">
                <p className="item-type">{item.type}</p>
                <p className="item-name">{item.name}</p>
                <p
                  className={`item-status ${
                    item.status === "In Stock"
                      ? "in-stock"
                      : "out-of-stock"
                  }`}
                >
                  {item.status}
                </p>
                <div className="item-actions">
                  <button>Remove</button>
                  <button>Save for Later</button>
                </div>
              </div>
              <div className="item-price">
                ₹ {item.price.toLocaleString("en-IN")}/-
              </div>
              <div className="item-quantity">
                <input type="number" min="1" defaultValue="1" />
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h1>ORDER SUMMARY</h1>
          <p className="sub-title">ERROR. PLEASE CHECK ITEMS IN YOUR CART</p>
          <div className="promo-code">
            <p>
              Have a Promo Code? <br />
              <span>GEEKY2023</span>
            </p>
          </div>
          <div className="summary-details">
            <p>
              Discount <span>₹ 500</span>
            </p>
            <p>
              Sub Total <span>₹ 5,27,300</span>
            </p>
            <p>
              Shipping <span>₹ 1,200</span>
            </p>
          </div>
          <p className="grand-total">
            GRAND TOTAL <span>₹ 5,28,000</span>
          </p>
          <button className="checkout-button">PROCEED TO SUCCEED</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
