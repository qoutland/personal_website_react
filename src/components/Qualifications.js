import React, { Component } from "react";
import {  MDBRow, MDBCol, MDBBtn} from "mdbreact";
import unr from '../assets/nevada.jpg';
import nve from '../assets/nvenergy.png';
import git from '../assets/github.jpg';
export default class Qualifications extends Component {
  render() {
    return (
        <section className="text-center my-5">
          <h2 className="">Qualifications</h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">
            I have graduated from an acredited 4 year university, worked as an intern for nearly 3 years and have completed various side projects. 
          </p>
          <MDBRow>
            <MDBCol md="4">
              <img src={unr} alt="nevada_logo"/>
              <h5 className="font-weight-bold my-4">University of Nevada, Reno</h5>
              <p className="grey-text mb-md-0 mb-5">Major: Computer Science Engineering</p>
              <p className="grey-text mb-md-0 mb-5">Minors: Mathematics & Cyber Security</p>
              <MDBBtn color="primary" href="https://unr.edu" target="_blank">View Website</MDBBtn>
            </MDBCol>
            <MDBCol md="4">
            <img src={nve} alt="nvenergy_logo"/>
              <h5 className="font-weight-bold my-4">NVEnergy</h5>
              <p className="grey-text mb-md-0 mb-5">
              Student Intern EMS/ESCC and Enterprise Applcation Technology
              </p>
              <MDBBtn color="primary" href="https://nvenergy.com" target="_blank">View Website</MDBBtn>
            </MDBCol>
            <MDBCol md="4">
            <img src={git} width="50%" height="50%" alt="git_logo"/>
              <h5 className="font-weight-bold my-4">Projects</h5>
              <p className="grey-text mb-md-0 mb-5">
                My side projects and open source contributions can be viewed here.
              </p>
              <MDBBtn color="primary" href="https://github.com/qoutland" target="_blank">View Website</MDBBtn>
            </MDBCol>
          </MDBRow>
        </section>
    );
  }
}

