import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../assets/main.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="bg-light">
                    <div className="container py-5">
                        <div className="row h-100 align-items-center py-5">
                            <div className="col-lg-6 col-sm-10 offset-sm-1 offset-lg-0">
                            <h1 className="display-4 mb-4 ">About us</h1>
                            <p className="lead text-muted text-monospace mb-0">Create about us page using Bootstrap 4.lorem
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates id, animi
                            architecto praesentium, temporibus, aspernatur eveniet at inventore eligendi consectetur
                            tenetur? Porro sed odit magnam fugiat quod doloribus sit? </p>
                        </div>
                        <div className="col-lg-6 col-sm-10 offset-sm-1 offset-lg-0 d-lg-block">
                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid"></img>
                </div>
            </div>
        </div>
    </div>


                {/* ****** THREE EXTRA CARDS ****** */}
    <section className="header-extradiv">
        <div className="container">
            <div className="row">
                <div className="extra-div col-lg-4 col-md-4 col-12">
                    <a href="#"><i className="fa-3x fa fa-briefcase" aria-hidden="true"></i></a>
                    <h2>What we have?</h2>
                    <p> adipisicing elit. Porro at enimid ex gf gh ffghfg blanditiis voluptatem perspiciatis. Quae, modi alias? </p>
                </div>
                <div className="extra-div col-lg-4 col-md-4 col-12">
                    <a href="#"><i className="fa-3x fa fa-table" aria-hidden="true"></i></a>
                    <h2>How we Work</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro at enim id ex blanditiis
                         voluptatem perspiciatis. Quae, modi alias? </p>
                 </div>
                <div className="extra-div col-lg-4 col-md-4 col-12">
                    <a href="#"><i className="fa-3x fa fa-globe" aria-hidden="true"></i></a>
                    <h2>Our Service</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro at enim id ex blanditiis
                         voluptatem perspiciat Quae, modi alias? </p>
                </div>
             </div>
         </div>
     </section>
            </div>
        )
    }
}
