import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBBtn, MDBIcon } from 'mdbreact';
import logo from '../assets/logo.png';
import resume from '../assets/resume.pdf'
export default class NavBar extends Component {
    render() {
        return (
            <MDBNavbar color="blue-gradient" dark expand="md">
                <MDBNavbarBrand>
                    <img className="logo navButton" src={logo} alt="logo" rel="noopener referrer"/>
                </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <a href={resume} target="_blank">
                        <MDBBtn className="navButton" color="white" >Resume <MDBIcon icon="file" /></MDBBtn>
                        </a>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        )
    }
}