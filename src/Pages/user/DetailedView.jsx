import React from 'react'
import Details from '../../components/user/ProductDetail/Details'
import Inside from '../../components/user/ProductDetail/Inside'
import Rating from '../../components/user/ProductDetail/Rating'
import ProductCard from '../../components/user/ProductDetail/ProductCard'
import Footer from '../../components/user/Footer/Footer'
import ProductFooter from '../../components/user/Footer/ProductFooter'
import BestPairedWith from '../../components/user/BestPairedWith/BestPairedWith'


function DetailedView() {
  return (
    <div>
        <Details/>
        <BestPairedWith/>
        <Inside/>
        <Rating/>
        <ProductCard/>
    
        <ProductFooter/>
    </div>
  )
}

export default DetailedView
