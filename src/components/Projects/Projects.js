import React, { Component } from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBAnimation
} from 'mdbreact';
import project_list from './project_list';
import axios from 'axios';
import Moment from 'react-moment';
import gitcache from './gitcache';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastCommit: '',
      commitNum: ''
    };
  }

  componentWillMount() {
    var today = new Date();
    console.log(today);
    axios
      .get('https://api.github.com/repos/qoutland/' + this.props.project.name)
      .then(res => {
        this.setState({ lastCommit: res.data.updated_at });
      })
      .catch(err => {
        this.setState({
          lastCommit: gitcache[this.props.project.name].updated_at
        });
      });

    axios
      .get(
        'https://api.github.com/repos/qoutland/' +
          this.props.project.name +
          '/contributors'
      )
      .then(res => {
        this.setState({ commitNum: res.data[0].contributions });
      })
      .catch(err => {
        this.setState({
          lastCommit: gitcache[this.props.project.name].updated_at
        });
      });
  }
  showRepoInfo = () => {
    if (this.state.lastCommit !== '') {
      return (
        <MDBCardText small>
          Last Commit:{' '}
          <strong>
            <Moment format="MM/DD/YYYY">{this.state.lastCommit}</Moment>
          </strong>{' '}
          | Commits: <strong>{this.state.commitNum}</strong>
        </MDBCardText>
      );
    }
  };

  render() {
    return (
      <MDBCol md="4" className="clearfix d-none d-md-block full100">
        <MDBCard className="mb-4 project">
          <MDBCardImage
            className={this.props.project.img}
            alt={this.props.project.img_alt}
          />
          <MDBCardBody>
            <MDBCardTitle>{this.props.project.title}</MDBCardTitle>
            <MDBCardText>{this.props.project.description}</MDBCardText>
            <MDBCardText muted small>
              Technologies used:{' '}
              <strong>{this.props.project.technologies}</strong>
            </MDBCardText>
            {this.showRepoInfo()}
            <a
              href={this.props.project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBBtn color="primary">View Project</MDBBtn>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLen: 2
    };
  }
  componentWillMount() {
    if (window.innerWidth <= 500) {
      this.setState({ listLen: 5 });
    }
  }
  createItems = projects => {
    return projects.map(function(project, i) {
      return <Project project={project} key={i} />;
    });
  };

  createItem = projects => {
    return projects.map(function(project, i) {
      return (
        <MDBCarouselItem itemId={i + 1} key={i}>
          <Project project={project} key={i} />
        </MDBCarouselItem>
      );
    });
  };

  showProjects = () => {
    if (window.innerWidth <= 500) {
      return (
        <MDBRow className="d-flex align-items-stretch">
          {this.createItem(project_list.projects)}
        </MDBRow>
      );
    } else {
      return (
        <MDBRow className="d-flex align-items-stretch">
          <MDBAnimation type="bounceInRight">
            <MDBCarouselItem itemId="1">
              {this.createItems(project_list.projects.slice(0, 3))}
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              {this.createItems(project_list.projects.slice(3, 6))}
            </MDBCarouselItem>
          </MDBAnimation>
        </MDBRow>
      );
    }
  };

  render() {
    return (
      <MDBContainer>
        <h1 style={{ textAlign: 'center' }}>
          <strong>Projects</strong>
        </h1>
        <MDBCarousel
          activeItem={1}
          length={this.state.listLen}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem
        >
          <MDBCarouselInner role="listbox">
            {this.showProjects()}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}
