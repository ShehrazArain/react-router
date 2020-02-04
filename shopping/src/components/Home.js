import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import main2 from '../img/main-2.jpg';
import main3 from '../img/main-3.jpg';
import main4 from '../img/main-4.jpg';
class Home extends Component {
    render() {
        return (
           <div className="home">
                <div className="row mt-5">
                    <div className="offset-lg-4 col-lg-2 col-md-4 col-sm-2 my-5">
                        <div className="card text-center shadow-lg" >
                            <img className="card-img-top" src={main2} alt="Dress"></img>
                            <div className="card-body">
                                <h5 className="card-title">Winter Dress</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-2 my-5">
                        <div className="card text-center shadow-lg">
                            <img className="card-img-top" src={main3} alt="Dress"></img>
                            <div className="card-body">
                                <h5 className="card-title">Spring Dress</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-2 my-5">
                        <div className="card text-center shadow-lg">
                            <img className="card-img-top" src={main4} alt="Dress"></img>
                            <div className="card-body">
                                <h5 className="card-title">Summer Dress</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
