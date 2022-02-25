import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
const Product = () => {
  return <div className='product'>
    <div className='productTitleContainer'>
        <h1 className='productTitle'> Product</h1>
        <Link to='/newproduct'>
        <button className='productAddButton'>Create</button>
        </Link>
    </div>
      </div>
  
}

export default Product