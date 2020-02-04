import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className="mt-5 py-5 ">
                <div className="jumbotron jumbotron-fluid" id="jumbo">
                    <div className="container">
                        <h1 className="display-4 font-weight-bold">Shopping with Shopper</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
