import React from 'react'
import './newproduct.css'
const NewProduct = () => {
  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>Add Product</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label for='file'>Image </label>
          <input type='file' id='file'></input>
        </div>
        <div className='addProductItem'>
          <label>Product Name </label>
          <input type='text' placeholder='Apple Airpods'></input>
        </div>
        <div className='addProductItem'>
          <label>In Stock </label>
          <input type='text' placeholder='123'></input>
        </div>
        <div className='addProductItem'>
          <label>Active</label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='addProductButton'>Create</button>
      </form>
    </div>
  )
}

export default NewProduct
