import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./cartpage.css";
import "@fontsource/rajdhani";
import "@fontsource/rajdhani/700.css";
import { getMyCart } from "../../../Services/userApi";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setIsLoading(true);
        const cart = await getMyCart();
        setCartItems(cart.data);
        
        // Initialize quantities
        const initialQuantities = {};
        if (cart.data && cart.data.items) {
          cart.data.items.forEach(item => {
            initialQuantities[item.id] = 1;
          });
        }
        setQuantities(initialQuantities);
        
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: parseInt(value)
    }));
  };

  const handleRemoveItem = (id) => {
    if (cartItems && cartItems.items) {
      const updatedItems = cartItems.items.filter(item => item.id !== id);
      setCartItems({...cartItems, items: updatedItems});
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "GEEKY2023") {
      setPromoApplied(true);
    } else {
      alert("Invalid promo code");
    }
  };

  const calculateSubtotal = () => {
    if (!cartItems || !cartItems.items) return 0;
    
    return cartItems.items.reduce((total, item) => {
      return total + (item.price * (quantities[item.id] || 1));
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const discount = promoApplied ? 500 : 0;
  const shipping = subtotal > 0 ? 1200 : 0;
  const grandTotal = subtotal - discount + shipping;

  const isCartEmpty = !cartItems || !cartItems.items || cartItems.items.length === 0;

  return (
    <div className="cart-container">
      {/* Header */}
      <motion.header 
        className="cart-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="menu">
          <motion.span whileHover={{ scale: 1.1, color: "#ff4081" }}>Products</motion.span>
          <motion.span whileHover={{ scale: 1.1, color: "#ff4081" }}>Solutions</motion.span>
          <motion.span whileHover={{ scale: 1.1, color: "#ff4081" }}>Store</motion.span>
          <motion.span whileHover={{ scale: 1.1, color: "#ff4081" }}>Support</motion.span>
        </div>
        <motion.div 
          className="logo"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          🅰
        </motion.div>
        <div className="cart-icon">
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="cart-text"
          >
            Cart
          </motion.span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="avatar-container"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
            />
          </motion.div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="cart-content">
        {isLoading ? (
          <div className="loading-container">
            <motion.div 
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p>Loading your cart...</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <motion.div 
              className="cart-items"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Your Cart
              </motion.h2>

              {isCartEmpty ? (
                <motion.div 
                  className="empty-cart"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="empty-cart-icon">🛒</div>
                  <p>Your cart is empty</p>
                  <motion.button 
                    className="continue-shopping"
                    whileHover={{ scale: 1.05, backgroundColor: "#ff4081" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue Shopping
                  </motion.button>
                </motion.div>
              ) : (
                <AnimatePresence>
                  {cartItems.items.map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      className="cart-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ backgroundColor: "rgba(255, 64, 129, 0.05)" }}
                    >
                      <div className="item-image-container">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="item-image"
                        />
                      </div>
                      <div className="item-info">
                        <p className="item-type">{item.type}</p>
                        <p className="item-name">{item.product_name}</p>
                        <p className={`item-status ${item.status === "In Stock" ? "in-stock" : "out-of-stock"}`}>
                          {item.status === "In Stock" ? (
                            <>
                              <span className="status-dot in-stock-dot"></span> In Stock
                            </>
                          ) : (
                            <>
                              <span className="status-dot out-of-stock-dot"></span> Out of Stock
                            </>
                          )}
                        </p>
                        <div className="item-actions">
                          <motion.button 
                            onClick={() => handleRemoveItem(item.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Remove
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Save for Later
                          </motion.button>
                        </div>
                      </div>
                      <div className="item-price">
                        ₹ {item.price.toLocaleString("en-IN")}/-
                      </div>
                      <div className="item-quantity">
                        <div className="quantity-control">
                          <motion.button 
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, Math.max(1, (quantities[item.id] || 1) - 1))}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            disabled={(quantities[item.id] || 1) <= 1}
                          >
                            -
                          </motion.button>
                          <input 
                            type="text" 
                            value={quantities[item.id] || 1} 
                            onChange={(e) => {
                              const val = parseInt(e.target.value);
                              if (!isNaN(val) && val > 0) {
                                handleQuantityChange(item.id, val);
                              }
                            }}
                            className="quantity-input"
                          />
                          <motion.button 
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 1) + 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            +
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </motion.div>

            {/* Order Summary */}
            {!isCartEmpty && (
              <motion.div 
                className="order-summary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  ORDER SUMMARY
                </motion.h1>
                
                <AnimatePresence>
                  {promoApplied ? (
                    <motion.p 
                      className="promo-success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Promo code applied successfully!
                    </motion.p>
                  ) : (
                    <motion.p 
                      className="sub-title"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      COMPLETE YOUR ORDER
                    </motion.p>
                  )}
                </AnimatePresence>
                
                <div className="promo-code">
                  <p>
                    Have a Promo Code?
                  </p>
                  <div className="promo-input-container">
                    <input 
                      type="text" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="promo-input"
                      disabled={promoApplied}
                    />
                    <motion.button 
                      className="apply-promo-btn"
                      onClick={handleApplyPromo}
                      whileHover={{ scale: 1.05, backgroundColor: "#444" }}
                      whileTap={{ scale: 0.95 }}
                      disabled={promoApplied}
                    >
                      Apply
                    </motion.button>
                  </div>
                </div>
                
                <motion.div 
                  className="summary-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {promoApplied && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="discount-row"
                    >
                      Discount <span>₹ {discount.toLocaleString("en-IN")}</span>
                    </motion.p>
                  )}
                  <p>
                    Sub Total <span>₹ {subtotal.toLocaleString("en-IN")}</span>
                  </p>
                  <p>
                    Shipping <span>₹ {shipping.toLocaleString("en-IN")}</span>
                  </p>
                </motion.div>
                
                <motion.div
                  className="grand-total-container"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <p className="grand-total">
                    GRAND TOTAL <span>₹ {grandTotal.toLocaleString("en-IN")}</span>
                  </p>
                </motion.div>
                
                <motion.button 
                  className="checkout-button"
                  whileHover={{ scale: 1.05, backgroundColor: "#ff4081" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  PROCEED TO CHECKOUT
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;