import React, { useContext, useState } from "react";
import "./Header.scss";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Info,
  MessageSquare,
  LogIn,
} from "react-feather";
import { ActionContext, StateContext } from "../../hooks";
import { Link, useLocation } from "react-router-dom";
import makeBlockie from "ethereum-blockies-base64";

function Header() {
  const location = useLocation();
  const { setModalConfig, logoutUser } = useContext(ActionContext);
  const { user } = useContext(StateContext);
  const [dropdownActive, setDropdownActive] = useState(false);
  return (
    <div
      className={`header ${location.pathname !== "/" ? "header-with-shadow" : ""}`}
    >
      <div style={{ display: "flex" }}>
        <Link to="/">
          <img src={require("../../assets/logo.svg")} alt="logo" />
        </Link>
        <div className="header-item-container">
          <Code className="header-item-icon" />
          <div id="about" className="header-item">
            about
          </div>
        </div>
        <div className="header-item-container">
          <Info className="header-item-icon" />
          <div id="info" className="header-item">
            FAQ
          </div>
        </div>
        <div className="header-item-container">
          <MessageSquare className="header-item-icon" />
          <div id="about" className="header-item">
            Chat
          </div>
        </div>
      </div>
      <div className="header-profile-container">
        {user ? (
          <>
            <img
              src={
                user.profile_pic
                  ? user.profile_pic
                  : user.email
                  ? makeBlockie(user.email)
                  : null
              }
              alt="profile"
              className="profile-icon"
            />
            <div
              className="header-profile-drop-down-icon"
              onClick={(e) => setDropdownActive(!dropdownActive)}
            >
              {!dropdownActive ? (
                <ChevronDown></ChevronDown>
              ) : (
                <ChevronUp></ChevronUp>
              )}
            </div>
          </>
        ) : (
          <>
            <div
              className="profile-item-container"
              onClick={(e) => setModalConfig(true, { type: "login" })}
            >
              <span>
                <LogIn className="profile-item-icon" />
              </span>
              <span className="profile-item">LogIn</span>
            </div>
          </>
        )}
        {dropdownActive && (
          <div
            className="menu-overlay"
            onClick={(e) => setDropdownActive(false)}
          ></div>
        )}
        {dropdownActive && (
          <div className="toolbar-menu-box">
            <div
              className="toolbar-menu-box-item"
              onClick={(e) => {
                setDropdownActive(false);
              }}
            >
              <Link className="toolbar-menu-box-item-title" to="/account">
                Account Info
              </Link>
            </div>
            <div
              className="toolbar-menu-box-item"
              onClick={(e) => {
                logoutUser();
                setDropdownActive(false);
              }}
            >
              <span className="toolbar-menu-box-item-title">Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
