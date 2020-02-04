import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Contact extends Component {
    render() {
        return (
            <section className="contact bg-light py-5 mt-5">
        <div className="contanier">
            <h2 className="section-heading">Contact us</h2>
            <form className="col-lg-6 offset-lg-3">
                <div className="form-group"> 
                    <label for="email">Email address</label>
                    <input type="email" id="email" className="form-control" aria-describedat="emailhelp" placeholder="Email"></input>
                    <small id="emailhelp" className="form-text text-muted">we well never share your email with anyone else</small>
                </div>
                <div className="form-group">               
                    <label for="name">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Name"></input>
                </div>
                <div className="form-group">   
                    <label for="message">Message</label>
                    <textarea class="form-group col-12" id="message" placeholder="type your message" rows="5"></textarea>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-group-text" id="check"></input>
                    <label className="form-group-check" for="check">Subcribe to newslater</label>
                </div>
                <div className="text-center">
                    <button className="btn btn-lg btn-primary">Submit</button>
                </div>
            </form> 
        </div>
    </section>

        );
    }
}

export default Contact;
