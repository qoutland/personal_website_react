import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBAnimation } from 'mdbreact';
import unr from './nevada.jpg';
import docker from './docker.png';
import docker_cert from './docker_cert.pdf';
import ckad from './ckad.png';
import ckad_cert from './ckad_cert.pdf'
import axios from 'axios';
import gitcache from './gitcache';

export default class Eductaion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoNum: 0,
      commitNum: 0
    };
  }

  componentWillMount() {
    var yrtotal = 0;
    //If cache is older than an hour
    axios
      .get('https://api.github.com/users/qoutland')
      .then(res => {
        this.setState({ repoNum: res.data.public_repos });
      })
      .catch(error => {
        this.setState({ repoNum: gitcache.repos });
      });
    axios
      .get('https://github-contributions-api.now.sh/v1/qoutland')
      .then(res => {
        res.data.years.map(function(year) {
          return (yrtotal += year.total);
        });
        return this.setState({ commitNum: yrtotal });
      })
      .catch(error => {
        this.setState({ commitNum: gitcache.commits });
      });
  }

  showRepoInfo = () => {
    if (this.state.repoNum !== 0) {
      return (
        <p className="grey-text mb-md-0 mb-5">
          Repositories: <strong>{this.state.repoNum}</strong> | Contributions:{' '}
          <strong>{this.state.commitNum}</strong>
        </p>
      );
    }
  };

  render() {
    return (
      <section className="text-center my-5">
        <MDBAnimation type="bounceInDown">
          <h1>
            <strong>Education</strong>
          </h1>
          <MDBRow>
            <MDBCol md="4" className="border">
              <img src={unr} alt="nevada_logo" />
              <h5 className="font-weight-bold my-4">
                University of Nevada, Reno
              </h5>
              <p className="grey-text mb-md-0 mb-5">
                Major: Computer Science Engineering
              </p>
              <p className="grey-text mb-md-0 mb-5">
                Minors: Mathematics & Cyber Security
              </p>
              <p className="grey-text mb-md-0 mb-5">
                <strong>Aug 2015 - May 2019</strong>
              </p>
              <MDBBtn
                className="qualBtn"
                color="primary"
                href="https://www.unr.edu/"
                target="_blank"
              >
                View Website
              </MDBBtn>
            </MDBCol>
            <MDBCol md="4" className="border">
              <img src={docker} alt="docker_logo" />
              <h5 className="font-weight-bold my-4">
                Docker Certified Associate
              </h5>
              <p className="grey-text mb-md-0 mb-5">
                <strong>Aug 2019</strong>
              </p>
              <MDBBtn
                className="qualBtn"
                color="primary"
                href={docker_cert}
                target="_blank"
              >
                View Certificate
              </MDBBtn>
              <MDBBtn
                className="qualBtn"
                color="primary"
                href="https://credentials.docker.com/74a85dbe-206f-4821-bed2-e92aad94c27f"
                target="_blank"
              >
                Validate Certificate
              </MDBBtn>
            </MDBCol>
            <MDBCol md="4" className="border">
              <img src={ckad} alt="docker_logo" />
              <h5 className="font-weight-bold my-4">
                Certified Kubernetes Application Developer
              </h5>
              <p className="grey-text mb-md-0 mb-5">
                <strong>Feb 2020</strong>
              </p>
              <MDBBtn
                className="qualBtn"
                color="primary"
                href={ckad_cert}
                target="_blank"
              >
                View Certificate
              </MDBBtn>
              <MDBBtn
                className="qualBtn"
                color="primary"
                href="https://www.youracclaim.com/badges/774db1da-3548-4193-8ec7-742d38fe1a0b/linked_in_profile"
                target="_blank"
              >
                Validate Certificate
              </MDBBtn>
            </MDBCol>                   
          </MDBRow>
        </MDBAnimation>
      </section>
    );
  }
}
