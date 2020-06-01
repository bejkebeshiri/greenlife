import React, { Component } from 'react';
import fire from './config/Fire';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
    <div class="col-md-12 text-center">
       <h1>Welcome to our project </h1>
       <button onClick={this.logout} class="btn btn-primary">Logout</button>
    </div>
);
}
}

export default Home;
