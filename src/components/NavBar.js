import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBBtn, MDBIcon } from 'mdbreact';
import logo from '../assets/logo.png';

export default class NavBar extends Component {
    render() {
        return (
            <MDBNavbar color="blue-gradient" dark expand="md">
                <MDBNavbarBrand>
                    <img className="logo" src={logo} alt="logo" />
                </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBBtn color="white" >Resume <MDBIcon icon="file" /></MDBBtn>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBBtn color="white">Contact <MDBIcon icon="envelope" /></MDBBtn>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        )
    }
}