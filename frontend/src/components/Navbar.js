import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className=" pinned-nav">
        <div className="nav-wrapper">
          <a
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger show-on-large"
          ></a>

          <ul className="right hide-on-med-and-down">
            <li>
              <button className="btn-flat  white-text waves-effect waves-light nav-btn">
                services
              </button>
            </li>
            <li>
              <Link
                to="/login"
                className=" btn-flat  white-text waves-effect waves-light nav-btn  modal-trigger"
              >
                sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <div className="user-view">
            <div className="background"></div>
            <div className="user-pic">
              <img className="circle" src="img/person3.jpg" alt="user image" />
            </div>
            <a href="#name">
              <span className="white-text name">John Doe</span>
            </a>
            <a href="#email">
              <span className="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>
        <li className="blue-text sidenav-close">
          <Link className="blue-text" to="/login">
            Portal
          </Link>
        </li>
        <li className="sidenav-close">
          <Link className="blue-text" to="/">
            Home
          </Link>
        </li>
        <li className="sidenav-close">
          <Link className="blue-text" to="/about">
            About
          </Link>
        </li>
        <li className="sidenav-close">
          <Link className="blue-text" to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
