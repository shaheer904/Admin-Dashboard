import { Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Charts from '../../components/charts/Charts'
import { productData } from '../../dummyData'
import './product.css'
const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'> Product</h1>
        <Link to='/newproduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Charts
            data={productData}
            dataKey='Sales'
            title='Sales Performance'
          />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='/images/topbarimage.jpg'
              alt=''
              className='productImg'
            ></img>
            <span className='productName'>Apple AirPods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Sales:</span>
              <span className='productInfoValue'>4000</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Active</span>
              <span className='productInfoValue'>Yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>In stock:</span>
              <span className='productInfoValue'>789</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='Apple Airpods'></input>
            <label>In Stock</label>
            <select name='inStock' id='idstock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='/images/topbarimage.jpg'
                alt=''
                className='productUploadImg'
              ></img>
              <lable for='file'>
                <Publish />
              </lable>
              <input id='file' type='file' style={{ display: 'none' }}></input>
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
