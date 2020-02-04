import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { Link } from 'react-router-dom'; 
import $ from "jquery";

        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() > 50 ) {
                    $(".navbar").css("background-color", "#ffffff");
                    $(".navbar").css("border-bottom", "1px solid #ddd");
                } else {
                     $(".navbar").css("background-color", "transparent");
                    $(".navbar").css("border-bottom", "none");
                }
            });
        });
class Navb extends Component {
    render() {
        return (
          <React.Fragment>
            <nav className="navbar navbar-expand-lg fixed-top">
              <div className="container">
                <a className="navbar-brand" href="#">
                  Shopper
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    {" "}
                    <i className="fa fa-bars"></i>{" "}
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNav"
                >
                  <ul className="nav">
                    <li className="nav-item">
                      <Link to="/home" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#gallery">
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link to='/service' className="nav-link" href="#">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="./contact" className="nav-link" href="#">
                        Contact
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link btn btn-pill btn-primary" href="#">
                        <i class="fas fa-shopping-cart mr-1"></i> 
                        <span id="pill-count">2</span> 
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </React.Fragment>
        );
    } 
}

export default Navb;