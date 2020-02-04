import React, { Component } from 'react';

export class CallToAction extends Component {
    render() {
        return (
            // < !--Call to action-- >
            <section className="call-to-action py-5">
                <div className="container text-center w-50">
                    <h2 className="wow animated slideInDown py-3">Do You Like Discount?</h2>
                    <div className="mx-auto heading-line"></div>
                    <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <button className="btn btn-lg btn-primary">Learn more</button>
                </div>
            </section>
        );
    }
}

export default CallToAction;
