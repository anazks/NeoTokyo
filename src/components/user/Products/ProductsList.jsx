import React from 'react';
import './producsList.css';
import { FaCartPlus } from "react-icons/fa6";

function ProductsList() {
  return (
    <div>
      <div className='Header'> 
        <button>GAMING PC</button>
        <button>WORKSTATIONS</button>
        <button>ENTERPRISE</button>
        <button>SERVERS</button>
        <button>ACCESSORIES</button>
        <button>PHERIPERIALS</button>
        <button>MERCH</button>
        <button>EXTRAS</button>
        <button className="special">FILTERS</button>
        <button className="special">SORT</button>
      </div>
      <div className="sort">
        <div className="category">
            <div>
              <h3>NEO TOKYO CERTIFIED</h3>
              <h3>BY BRAND</h3>
              <h3>CATEGORY</h3>
              <h3>PRICE</h3>
              <h3>AVAILABILITY</h3>
              <h3>RATING</h3>
              <h3>NEO TOKYO PRIORITY ONE FULFILLED</h3>
            </div>
        </div>
        <div className="options">
            <div>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>  
            </div>
            <div>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>  
            </div>
            <div>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>  
            </div>
            <div>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>  
            </div>
            <div>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>  
            </div>
            <div>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>  
            </div>
            <div>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>
                <select name="" id=""><option value="">option</option></select>  
            </div>
            <div style={{marginTop: '10px'}}>
              <button className='apply'>APPLY</button>
            </div>
        </div>
      </div>
      <div className="products">
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
      <div className="card">
          <img src="https://s3-alpha-sig.figma.com/img/f311/20ce/21a04da9e69673d1780eb42469192de9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7CZ4UAZ9RHp2GL~hW7uuB9ZyzFh-d-4PSgi2nzZEcwIs2cmjBnrZkZRAadwtIgh~J4kW67pUZ~cdbp13ysWTXsiQNyLqqsMvAuguyF5t1BJQzcxkVHs-dG2IhFeRoGAtSaKKp0fNtbWhnMM2Feiqg8MJE~iLGoPFc1LbXqKla-9XFr9zHojw-WBJ435FKmI3Zi4xP6YYT7Xm9S6ouPqdjhSnwbQaJxXH8WBuJ5a8S-XksGx8KdzCNvt2So5MSyNE-e5XutO7yxM~PuhEsoid7HJ1be5xxYPaWklpuu0YiSJ~mxOpSuKiTJk7Qlwc4349vjNi63azEMVaxaCPpFYnw__" alt="product" />
          <h2>Product Name</h2>
          <p className="price">₹ 2,60,000</p>
          <div className="buttons">
          <span><FaCartPlus/> Add To Cart</span>
            <button className="buy-now">Buy Now</button>
          </div>
      </div>
    </div>
    </div>
  );
}

export default ProductsList;
