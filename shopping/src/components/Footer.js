import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
            <div>
                <section className="footer mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <a className="navbar-brand" href="#">Shopper</a>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sit aperiam doloribus consequuntur laborum repellendus deleniti autem porro. Veniam officiis,</p>
                                <ul className="nav social-media mt-3">
                                    <li className="px-2">
                                        <a href="#">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="px-2">
                                        <a href="#">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li className="px-2">
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="px-2">
                                        <a href="#">
                                            <i className="fab fa-google"></i>
                                        </a>
                                    </li>
                                    <li className="px-2">
                                        <a href="#">
                                            <i className="fab fa-git"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h4>Other page</h4>
                                <ul className="flex-column mt-3">
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link">About us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Terms & Conditions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h3 className="mb-3">Social Media</h3>
                                <img className="rounded mx-1 my-1 float-left" alt="ss" src="https://fakeimg.pl/100x100/ffffff/"></img>
                                <img className="rounded mx-1 my-1 float-left" alt="ss" src="https://fakeimg.pl/100x100/ffffff/"></img>
                                <img className="rounded mx-1 my-1 float-left" alt="ss" src="https://fakeimg.pl/100x100/ffffff/"></img>
                                <img className="rounded mx-1 my-1 float-left" alt="ss" src="https://fakeimg.pl/100x100/ffffff/"></img>
                                <img className="rounded mx-1 my-1 float-left" alt="ss" src="https://fakeimg.pl/100x100/ffffff/"></img>
                                <img className="rounded mx-1 my-1 float-left" alt="ss" src="https://fakeimg.pl/100x100/ffffff/"></img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer