import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBBtn, MDBIcon } from 'mdbreact';
import logo from './logo.png';
import resume from './resume.pdf'

export default class NavBar extends Component {
    render() {
        return (
            <MDBNavbar color="blue-gradient" dark expand="md">
                <MDBNavbarBrand>
                    <a href="/"><img className="logo navButton" src={logo} alt="logo"/></a>
                </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                        <MDBBtn className="navButton" color="white" >Resume <MDBIcon icon="file" /></MDBBtn>
                        </a>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        )
    }
}