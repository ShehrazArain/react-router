import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import main2 from '../img/main-2.jpg';
import model1 from '../img/model1.jpg';
import model2 from '../img/model2.jpg';
import model3 from '../img/model3.jpg';
import model4 from '../img/model4.jpg';
import model5 from '../img/model5.jpg';

import './Main.css';

class Gallery2 extends Component {
    render() {
        return (
            //  ****** Home ********
    <div className="home-section mt-5">
        <div className="container">
            <div className="row">
       
                
                {/* / <!--******* First Section *********--> */}
                <div className="col-lg-4">
                    <div className="mt-5">
                        <Link to='/clothdetails'><img src={main2} width="612px" height="32" className="img-fluid" alt=""></img></Link>
                        <Link to='/clothdetails'><h5>Fashion model in red dress, beautiful woman portrait waving gown.</h5></Link>
                        <p className="text-muted">Source Dawn News Paper</p>
                        <p className="lead">ectetur adipisicing elit. Distinctio quia architecto officia ut do Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do</p>
                    </div>

                    {/* <!--******* 2nd Poss *********--> */}
                    <div className="mt-5">
                                <a href="#"><img src={model1} width="612px" height="320" className="img-fluid" alt=""></img></a>
                        <a href="">
                            <h5>Victoria Beckham Gives Her Signature Suit a Romantic Twist</h5>
                        </a>
                        <p className="text-muted">Source Vogue</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do</p>
                    </div>

                    {/* <!--******* 3rd Post *********--> */}
                    <div className="mt-5">
                                <a href="#"><img src={model2} width="612px" height="320" className="img-fluid" alt=""></img></a>
                        <a href="">
                        <h5>The Story Behind Jennifer Lopez’s Epic Versace Super Bowl Wardrobe</h5>
                        </a>
                        <p className="text-muted">Source by CNN</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do</p>
                    </div>
                </div>


                {/* <!--******* Second Section *********--> */}
                <div className="col-lg-4">
                    <div className="mt-5">
                        <a href="#"><img src={model3} width="612px" height="320" className="img-fluid" alt=""></img></a>
                        <a href="">
                        <h5>Last Week, Stars Celebrated the Joy of Dressing Up</h5>
                        </a>
                        <p className="text-muted">Source By BBC News</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do
                        </p>
                    </div>

                    {/* <!--******* 2nd Poss *********--> */}
                    <div className="mt-5">
                                <a href="#"><img src={model4} width="612px" height="320" className="img-fluid" alt=""></img></a>
                        <a href="">
                        <h5>The Best Dressed Celebrities at the 2020 BAFTA Awards</h5>
                        </a>
                        <p className="text-muted">Blog by Education in Pakistan</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do</p>
                    </div>

                    {/* <!--******* 3rd Post *********--> */}
                    <div className="mt-5">
                        <a href="#"><img src={model5} width="612px" height="320" className="img-fluid" alt=""></img></a>
                        <a href="">
                        <h5>The BAFTAs Dress Code Called for Sustainable Fashion, But Did Celebrities Follow Through?</h5>
                        </a>
                        <p className="text-muted">Source Vogue</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia architecto officia ut do</p>
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
                            <a href="https://twitter.com/Sheraz_Arain05" className="twitter-follow-button"></a><script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
                       </div>


                       {/* <!--******-- Popualr Posts --********--> */}
                    <div className="mt-5">
                        <p className="lead">Lastest News</p>
                        <div className="media">
                            <a href="#"><img src={model3} width="130px" height="70px" className="pr-3 img-fluid d-flex" alt=""></img></a>
                            <div className="media-body">
                                <a href="#"><h6>DO You known How Models Girls Thinks?</h6></a>
                                <span className="text-muted">20th Feb 2020</span>
                            </div>
                        </div>

                         <div className="media mt-3">
                            <a href="#"><img src={model4} width="130px" height="70px" className="pr-3 img-fluid d-flex" alt=""></img></a>
                            <div className="media-body">
                                <a href="#"><h6>Last Week, Stars Celebrated the Joy of Dressing Up</h6></a>
                                <span className="text-muted">11th Jan 2020</span>
                            </div>
                        </div>

                        <div className="media mt-3">
                            <a href="#"><img src={model3} width="130px" height="70px" className="pr-3 img-fluid d-flex" alt=""></img></a>
                            <div className="media-body">
                                <a href="#">
                                    <h6>The Best Dressed Celebrities at the 2020 BAFTA Awards</h6>
                                </a>
                                <span className="text-muted">1st Feb 2020</span>
                            </div>
                        </div>

                        <div className="media mt-3">
                            <a href="#"><img src={model5} width="130px" height="70px" className="pr-3 img-fluid d-flex" alt=""></img></a>
                            <div className="media-body">
                                <a href="#"><h6>Smoking is injuries to the Health but Why?</h6></a>
                                <span className="text-muted">14th Feb 2020</span>
                            </div>
                        </div>

                        <div className="mt-5" id="icons">
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

export default Gallery2;
