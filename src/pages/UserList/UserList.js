import React, { useState } from 'react'
import './userlist.css'

import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { rowsData } from '../../dummyData'

const UserList = () => {
  const [User, setUser] = useState(rowsData)
  const handleDelete = (id) => {
    console.log(id)
    setUser(User.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User Name',
      width: 200,
      renderCell: (param) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={param?.row?.avatar} alt=''></img>
            {param?.row?.username}
          </div>
        )
      },
    },
    { field: 'email', headerName: '@Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      // type: 'number',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
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
            <Link to={'/user/' + param.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(param.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className='userList'>
      UserList
      <DataGrid
        rows={User}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
