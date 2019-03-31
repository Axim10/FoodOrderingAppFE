
import Checkout from './checkout/Checkout';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";



class Controller extends Component {

    constructor() {
        super();

        this.baseUrl = "http://localhost:8080/api";
    }

    render() {
        return(
            <Router>

                <div className="main-container">
          
                  <Route path='/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
                  <Route path='/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
                  <Route path='/restaurant/:restaurantID' render={(props) => <Details {...props} baseUrl={this.baseUrl} />} />
                  <Route path='/checkout' render={(props) => <Checkout {...props} baseUrl={this.baseUrl} />} />

                
                </div>
            </Router>
        )
    }
}


export default Controller;

