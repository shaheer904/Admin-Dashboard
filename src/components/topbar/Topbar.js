import React from "react";
import "./topbar.css";
//materila ui icons
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Mehmaat Traders</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">22</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">22</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
            {/* <span className="topIconBadge">22</span> */}
          </div>
          <img src='/images/topbarimage.jpg' alt="" className="topAvatar" ></img>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
