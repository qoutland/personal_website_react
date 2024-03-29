import React, { Component } from 'react';
import {
  MDBJumbotron,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
} from 'mdbreact';
import avatar from './avatar.svg';

export default class Jumbotron extends Component {
  render() {
    return (
      <MDBJumbotron fluid className="text-center">
        <MDBAnimation type="zoomIn">
          <MDBCardTitle className="card-title h1 pb-2">
            Quintn Outland
          </MDBCardTitle>

          <MDBCardText>DevOps, Developer, IT Professional</MDBCardText>
          <MDBCardImage className="img-fluid mx-auto avatar" src={avatar} />
          <MDBCardBody>
            <MDBCardTitle>Hi, I'm Quin. Nice to meet you.</MDBCardTitle>
            <MDBCardText className="text-center statement mx-auto">
              I am an experienced DevOps Engineer with a software development
              background. I am highly motivated and I pick up new things easily.
              I enjoy automation, CI/CD pipelines, and securing cloud environments.
            </MDBCardText>
          </MDBCardBody>
        </MDBAnimation>
      </MDBJumbotron>
    );
  }
}
