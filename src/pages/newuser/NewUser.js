import React from "react";
import "./newuser.css";
const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="ali7845"></input>
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Muhammad Ali"></input>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="ali7845@gmail.com"></input>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password"></input>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+92090078601"></input>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Patoki | Pakistan"></input>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
          <input type="radio" value="male" id="male" placeholder="Male"></input>
          <label for="male">Male</label>
          <input
            type="radio"
            value="female"
            id="female"
            placeholder="Female"
          ></input>
          <label for="male">Female</label>
          </div>
        </div>
        <div className="newUserItem">
            <select className="newUserSelect" name='active' id='active'>
<option value='yes'>Yes</option>
<option value='no'>No</option>

            </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
