import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBAnimation } from 'mdbreact';
import unr from './nevada.jpg';
import nve from './nvenergy.png';
import taos from './taos.png';
import axios from 'axios';
import gitcache from './gitcache';

export default class Qualifications extends Component {
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
            <strong>Experience</strong>
          </h1>
          <MDBRow>
            <MDBCol md="6" className="border">
              <img src={nve} alt="nvenergy_logo" />
              <h5 className="font-weight-bold my-4">NVEnergy</h5>
              <p className="grey-text mb-md-0 mb-5">
                Site Reliability Engineer ESCC and Enterprise Applcation Technology
              </p>
              <p className="grey-text mb-md-0 mb-5">
                <strong>Oct 2016 - Jun 2019</strong>
              </p>
              <MDBBtn
                className="qualBtn"
                color="primary"
                href="https://www.nvenergy.com"
                target="_blank"
              >
                View Website
              </MDBBtn>
            </MDBCol>
            <MDBCol md="6" className="border">
              <img src={taos} alt="taos_logo" />
              <h5 className="font-weight-bold my-4">Taos Mountain LLC</h5>
              <p className="grey-text mb-md-0 mb-5">
               Software and DevOps Engineer
              </p>
              <p className="grey-text mb-md-0 mb-5">
                <strong>Aug 2019 - Present</strong>
              </p>

              <MDBBtn
                className="qualBtn"
                color="primary"
                href="https://taos.com"
                target="_blank"
              >
                View Website
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBAnimation>
      </section>
    );
  }
}
