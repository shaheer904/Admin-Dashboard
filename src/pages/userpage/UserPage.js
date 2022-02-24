import React from 'react'
import './userpage.css'
const UserPage = () => {
  return (
    <div className='userPage'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='showUser'>
          <div className='userShowTop'>
            <img
              src='/images/topbarimage.jpg'
              alt=''
              className='userShowImg'
            ></img>
            <div className='userShowTopTitle'>
              <span className='userShowUsername'> Jon Snow</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'></div>
        </div>
        <div className='userUpdate'></div>
      </div>
    </div>
  )
}

export default UserPage
