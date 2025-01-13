import React from 'react'
import './Blog.css'
import blog from '../../../Images/blog.png'
function Blog() {
  return (
    <div className="container">
    <header className="header">
      <div className="logo">NT<br />KO</div>
      <div className="title">
        <h1>Priority One by Neo Tokyo</h1>
        <p>For the One's who want the best we offer</p>
      </div>
    </header>
    <main className="main">
      <div className="content">
        <h2>Hello Julian, search our Blogs</h2>
        <ul>
          <li>New Tech News</li>
          <li>Tech Releases</li>
          <li>Gadgets</li>
          <li>E Sports Segments</li>
          <li>and Much more</li>
        </ul>
        <p className="footer-text">Found what you are looking for?</p>
      </div>
      <div className="image-container">
        <img
          src={blog} // Replace with the actual image URL
          alt="Planet"
          className="planet-image"
        />
      </div>
    </main>
    <footer className="footer">
      <button className="search-button">SEARCH</button>
    </footer>
  </div>

  )
}

export default Blog
