import React, { Component } from 'react';
import main2 from '../img/main-2.jpg';
import model1 from '../img/model1.jpg';
import model2 from '../img/model2.jpg';
import model3 from '../img/model3.jpg';
import model4 from '../img/model4.jpg';
import model5 from '../img/model5.jpg';


export default class Clothdetails extends Component {
    render() {
        return (

        //   <!--******* Home *********--> 
    <div className="home-section ">
        <div className="container">
            <div className="row">

                <div className="col-lg-8">
                    <div className="mt-4 border">
                                <h3 className="pl-3 pt-3 font-weight-bold ">Fashion Model in Red Dress, Beautiful Woman Portrait Waving Gown.</h3>
                        <hr></hr>
                        <p className="text-muted pl-3">Dr Arif Alvi said on 20th-Feb-2020</p>
                                <p className="lead text-justify p-2 text-monospace">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto error, sunt beatae recusandae quasi ipsa numquam debitis a consequuntur? Voluptatibus natus distinctio pariatur ducimus, necessitatibus error culpa facere exercitationem.</p>
                                <p className="lead text-justify p-2 text-monospace">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto error, sunt beatae recusandae quasi ipsa numquam debitis a consequuntur? Voluptatibus natus distinctio pariatur ducimus, necessitatibus error culpa facere exercitationem.</p>
                                <p className="lead text-justify p-2 text-monospace">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto error, sunt beatae recusandae quasi ipsa numquam debitis a consequuntur? Voluptatibus natus distinctio pariatur ducimus, necessitatibus error culpa facere exercitationem.</p>
                        <img src={main2} width="612px" height="320px" className="img-fluid d-flex m-auto" alt=""></img>
                                <p className="lead text-justify p-2 text-monospace">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto error, sunt beatae recusandae quasi ipsa numquam debitis a consequuntur? Voluptatibus natus distinctio pariatur ducimus, necessitatibus error culpa facere exercitationem.</p>
                                <p className="lead text-justify p-2 text-monospace">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto error, sunt beatae recusandae quasi ipsa numquam debitis a consequuntur? Voluptatibus natus distinctio pariatur ducimus, necessitatibus error culpa facere exercitationem.</p>
                                <p className="lead text-justify p-2 text-monospace">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto error, sunt beatae recusandae quasi ipsa numquam debitis a consequuntur? Voluptatibus natus distinctio pariatur ducimus, necessitatibus error culpa facere exercitationem.</p>
                        
                    </div>
                </div>
                 



                {/* <!--******* This Section Our-Side-Bar *********--> */}
                <div className="col-lg-4">
                    <div id="sidebar">

                        <div className="mt-5">
                            <p className="lead">Subcribe For More Information</p>
                            <input type="text" className="form-control mb-2" placeholder="Email Address"></input>
                            <button className="btn btn-success">Subcribe</button>
                        </div>


                        <div className="mt-4">
                            <p className="lead">Follow on Twitter</p>
                            <a href="https://twitter.com/Sheraz_Arain05" className="twitter-follow-button">Follow Eduction in Pakistan</a>
                            <script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
                        </div>


                        {/* <!--******-- Popualr Posts --********--> */}
                        <div className="mt-5">
                            <p className="lead">Popualr Posts</p>
                            <div className="media">
                                        <a href="#"><img src={model1} width="130px" height="70px" className="pr-3 img-fluid d-flex" alt=""></img></a>
                                <div className="media-body">
                                    <a href="#">
                                        <h6>DO You known How Enterpinuer Thinks?</h6>
                                    </a>
                                    <span className="text-muted">20th Feb 2020</span>
                                </div>
                            </div>

                            <div className="media mt-3">
                                        <a href="#"><img src={model2} width="130px" height="70px" className="pr-3 img-fluid d-flex" alt=""></img></a>
                                <div className="media-body">
                                    <a href="#">
                                        <h6>How Smart React Girls When You said to her I Love You</h6>
                                    </a>
                                    <span className="text-muted">11th Jan 2020</span>
                                </div>
                            </div>

                            <div className="media mt-3">
                                        <a href="#"><img src={model3} width="130px" height="70px" className="pr-3 img-fluid d-flex" alt=""></img></a>
                                <div className="media-body">
                                    <a href="#">
                                        <h6>Happiness is not found in this world..</h6>
                                    </a>
                                    <span className="text-muted">1st Feb 2020</span>
                                </div>
                            </div>

                            <div className="media mt-3">
                                        <a href="#"><img src={model4} width="130px" height="70px" className="pr-3 img-fluid d-flex" alt=""></img></a>
                                <div className="media-body">
                                    <a href="#">
                                        <h6>Smoking is injuries to the Health but Why?</h6>
                                    </a>
                                    <span className="text-muted">14th Feb 2020</span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <p className="lead">Stay Connected</p>
                            <a href="#"><i className="fab fa-facebook fa-3x px-2"></i></a>
                            <a href="#"><i className="fab fa-twitter-square fa-3x px-2"></i></a>
                            <a href="#"><i className="fab fa-youtube-square fa-3x px-2"></i></a>
                            <a href="#"><i className="fab fa-google-plus-square fa-3x px-2"></i></a>
                            <a href="#"><i className="fab fa-pinterest-square fa-3x px-2"></i></a>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>
        );
    }
}
