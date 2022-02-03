import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 text-left">
                                <h1>Planty</h1>
                                <h3>In Plants We Trust</h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">Planty</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;