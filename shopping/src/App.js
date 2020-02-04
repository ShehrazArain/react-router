import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navb, Gallery2, Jumbotron, Home, Contact, Footer, Gallery, Testimonial, CallToAction, About, Pricing, Clothdetails } from './components/Index'
import './assets/main.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navb />
              <Home />
              <CallToAction />
              <Gallery />
              <Testimonial />
              <Contact />
              <Footer />
            </Route>
            <Route path="/home">
              <Navb />
              <Home />
              <CallToAction />
              <Gallery />
              <Testimonial />
              <Contact />
              <Footer />
            </Route>
            <Route path="/about">
              <Navb />
              <About/>
              <Footer />
            </Route>
            <Route path="/contact">
              <Navb />
              <Contact />
              <Footer />
            </Route>
            <Route path="/service">
              <Navb />
              <Gallery2 />
              <Footer />
            </Route>
            <Route path="/clothdetails">
              <Navb />
              <Jumbotron/>
              <Clothdetails />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;