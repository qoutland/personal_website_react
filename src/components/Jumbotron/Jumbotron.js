import React, { Component } from 'react';
import { MDBJumbotron, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText, MDBAnimation } from 'mdbreact';
import avatar from './avatar.svg';

export default class Jumbotron extends Component {
    render() {
        return ( 
            <MDBJumbotron fluid className="text-center">
                    <MDBAnimation type="zoomIn">
                        <MDBCardTitle className="card-title h1 pb-2">Quintn Outland</MDBCardTitle>
                    
                    <MDBCardText>Developer, DevOps, IT Professional</MDBCardText>
                    <MDBCardImage className="img-fluid mx-auto" src={avatar} />
                    <MDBCardBody>
                        <MDBCardTitle>Hi, I'm Quin. Nice to meet you.</MDBCardTitle>
                        <MDBCardText className="text-center statement mx-auto" >
                        I am a recent college graduate looking to jumpstart my professional career. I am highly motivated and I pick up new things easily. I am looking to begin my career in a small to medium size company and would be comfortable wearing multiple hats.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBAnimation>
            </MDBJumbotron>
        )
    }
}