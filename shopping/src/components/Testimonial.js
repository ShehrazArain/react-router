import React, { Component } from 'react';
import testimonial from '../img/testimonial-1.jpg';

import testimonial2 from '../img/testimonial-2.jpg';

import testimonial3 from '../img/testimonial-3.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
export class Testimonial extends Component {
    render() {
        return (
            <section className="testimonials mt-5 pt-4  ">
                <div className="container">
                    <div id="carousel" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img className="float-right testimonial-image" src={testimonial} alt=""></img>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="call-to-action-heading">John</h3>
                                        <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maiores ea voluptatum ut fuga, rerum tempore quidem facere nisi qui eligendi. Inventore eveniet ducimus culpa sed a quam eos distinctio!</blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img className="float-right testimonial-image" src={testimonial2} alt=""></img>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="call-to-action-heading">Shehroz</h3>
                                        <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maiores ea voluptatum ut fuga,rerum tempore quidem facere nisi qui eligendi. Inventore eveniet ducimus culpa sed a quam eosdistinctio!</blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img className="float-right testimonial-image" src={testimonial3} alt=""></img>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="call-to-action-heading">Shahzaib</h3>
                                        <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maiores ea voluptatum utfuga,rerum tempore quidem facere nisi qui eligendi. Inventore eveniet ducimus culpa sed a quameosdistinctio!</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;
