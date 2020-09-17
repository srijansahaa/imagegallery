import React, { Component } from 'react';
import logo from '../assets/logo.png'

class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" alt="Unsplash..." loading="lazy" />
            </a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content"  >
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse justify-content-end" id="navbar-content">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Collection</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Explore</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">...</a>
                    </li>
                    <button type="button" class="btn btn-outline-dark">Submit a Photo</button>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar