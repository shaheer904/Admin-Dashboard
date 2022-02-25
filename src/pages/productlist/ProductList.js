import { DeleteOutline } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productRows } from '../../dummyData'
import './productlist.css'
const ProductList = () => {
    const [data,setData]=useState(productRows)
    const handleDelete = (id) => {
        console.log(id)
        setData(data.filter((item) => item.id !== id))
      }
      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Product Name',
          width: 200,
          renderCell: (param) => {
            return (
              <div className='productListItem'>
                <img className='productListImg' src={param?.row?.img} alt=''></img>
                {param?.row?.name}
              </div>
            )
          },
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          // type: 'number',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          // description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          // valueGetter: (params) =>
          //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
          field: 'Actions',
          headerName: 'Action',
          width: 150,
          renderCell: (param) => {
            return (
              <>
                <Link to={'/products/' + param.row.id}>
                  <button className='productListEdit'>Edit</button>
                </Link>
                <DeleteOutline
                  className='productListDelete'
                  onClick={() => handleDelete(param.row.id)}
                />
              </>
            )
          },
        },
      ]
  return  <div className='productList'>
      ProductList
      <DataGrid 
      rows={data}
      disableSelectionOnClick
      columns={columns}
      pageSize={8}
      checkboxSelection
      
      
      />
      
      
      </div>
  
}

export default ProductList