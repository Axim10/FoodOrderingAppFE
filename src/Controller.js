import React, { Component } from 'react';


import Checkout from './checkout/Checkout';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component {

    constructor() {
        super();
        this.baseUrl = 'http://localhost:8080/api/';
    }

    render() {
        return (
            <Router>
                <div className='main-container'>
                    
                    <Route path='/checkout' render={(props) => <Checkout {...props} baseUrl={this.baseUrl} />} />
                
                </div>
            </Router>
        )
    }
}

export default Controller;
