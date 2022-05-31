import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";
import svg from "../../newslogo(1).png";
import './style.css';

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid ss">
        <img
          src={svg}
          alt=""
          width="100"
          height="70"
          className="d-inline-block align-text-top"
        />
        <span className="h12" ><b>News and Events</b></span>
        <Link to='/form'><b>Input</b></Link>
        <Link to='/dashboard'><b>Dashboard</b></Link>


      </div>
    </nav>
  );
}
