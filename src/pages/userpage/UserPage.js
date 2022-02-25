import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./userpage.css";
const UserPage = () => {
  return (
    <div className="userPage">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newuser'>
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="showUser">
          <div className="userShowTop">
            <img
              src="/images/topbarimage.jpg"
              alt=""
              className="userShowImg"
            ></img>
            <div className="userShowTopTitle">
              <span className="userShowUsername"> Jon Snow</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle"> Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle"> John9900</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle"> 10.02.2002</span>
            </div>
            <span className="userShowTitle"> Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle"> 090078601</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle"> John9900@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle"> Lahore | Pakistan</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="formUpdateLeft">
              <div className="userUpdateItem">
                <label> UserName</label>
                <input
                  type="text"
                  placeholder="john9900"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label> Full Name</label>
                <input
                  type="text"
                  placeholder="John Snow"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label> Email</label>
                <input
                  type="text"
                  placeholder="john9900@gmail.com"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+92090078601"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Lahore | Pakistan"
                  className="userUpdateInput"
                ></input>
              </div>
            </div>
            <div className="formUpdateRight">
              <div className="userUpdateUpload">
                <img src="/images/topbarimage.jpg" alt=""
                className="userUpdateImg"
                ></img>
                <label htmlFor="file">
                  <Publish  className="userUpdaeIcon"/>
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                ></input>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
