import React, { Component } from "react";
import {  MDBRow, MDBCol, MDBBtn, MDBAnimation} from "mdbreact";
import unr from './nevada.jpg';
import nve from './nvenergy.png';
import git from './github.jpg';
import axios from 'axios';

export default class Qualifications extends Component {
  constructor(props) {
    super(props);
    this.state={
      repoNum: 0,
      commitNum: 0
    }
  }

  componentWillMount() {
    var yrtotal=0;
    axios.get('https://api.github.com/users/qoutland')
    .then((res) => {
      this.setState({repoNum: res.data.public_repos})
    })
    axios.get('https://github-contributions-api.now.sh/v1/qoutland')
    .then((res) => res.data.years.map(function(year) {
      yrtotal += year.total
      return true
    }))
    .then((something) => {this.setState({commitNum: yrtotal})} )
    
  }

  showRepoInfo = () => {
    
    if (this.state.repoNum !== 0){
      return (
      <p className="grey-text mb-md-0 mb-5">
      Repositories: <strong>{this.state.repoNum}</strong> | Contributions: <strong>{this.state.commitNum}</strong>
      </p>
      )
    }
  }

  render() {
    return (
        <section className="text-center my-5">
          <MDBAnimation type="bounceInDown">
          <h2 className="">Qualifications</h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">
            I have graduated from an acredited 4 year university, worked as an intern for nearly 3 years and have completed various side projects. 
          </p>
          <MDBRow >
            <MDBCol md="4" className="border">
              <img src={unr} alt="nevada_logo"/>
              <h5 className="font-weight-bold my-4">University of Nevada, Reno</h5>
              <p className="grey-text mb-md-0 mb-5">Major: Computer Science Engineering</p>
              <p className="grey-text mb-md-0 mb-5">Minors: Mathematics & Cyber Security</p>
              <MDBBtn color="primary" href="https://www.unr.edu/" target="_blank">View Website</MDBBtn>
            </MDBCol>
            <MDBCol md="4" className="border">
            <img src={nve} alt="nvenergy_logo"/>
              <h5 className="font-weight-bold my-4">NVEnergy</h5>
              <p className="grey-text mb-md-0 mb-5">
              Student Intern EMS/ESCC and Enterprise Applcation Technology
              </p>
              <MDBBtn color="primary" href="https://www.nvenergy.com" target="_blank">View Website</MDBBtn>
            </MDBCol>
            <MDBCol md="4" className="border">
            <img src={git} width="50%" height="50%" alt="git_logo"/>
              <h5 className="font-weight-bold my-4">Projects</h5>
              <p className="mb-md-0 mb-5">
                My side projects and open source contributions can be viewed here.
              </p>
              {this.showRepoInfo()}

              <MDBBtn color="primary" href="https://github.com/qoutland" target="_blank">View Website</MDBBtn>
            </MDBCol>
          </MDBRow>
          </MDBAnimation>
        </section>
    );
  }
}

