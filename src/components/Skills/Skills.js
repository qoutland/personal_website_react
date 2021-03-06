import React, { Component } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBContainer,
  MDBIcon,
  MDBCardFooter,
  MDBAnimation
} from 'mdbreact';
import ReactCardFlip from 'react-card-flip';
import skill_list from './skill_list';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false
    };
  }

  showList = skills => {
    return skills.map(function(skill, i) {
      return (
        <li key={i}>
          <span>{skill}</span>
        </li>
      );
    });
  };

  handleFlip = e => {
    e.preventDefault();
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    return (
      <MDBCard className="outer-card">
        <MDBAnimation type="bounceInLeft">
          <ReactCardFlip
            className="flipper"
            isFlipped={this.state.flipped}
            flipDirection="vertical"
          >
            <MDBCard className="skill" key="front">
              <MDBCardBody className="text-center">
                <MDBIcon
                  className="skill-logo light-blue-text"
                  icon={this.props.skill_data.icon}
                />
                <MDBCardTitle tag="h5">
                  {this.props.skill_data.title}
                </MDBCardTitle>
                <ul className="skills">
                  {this.showList(this.props.skill_data.proficient_skills)}
                </ul>
              </MDBCardBody>
              <MDBCardFooter muted>
                <a
                  href="#!"
                  className="rotate-btn"
                  data-card="card-1"
                  onClick={this.handleFlip}
                >
                  <MDBIcon icon="redo" /> Click here to rotate
                </a>
              </MDBCardFooter>
            </MDBCard>
            <MDBCard className="skill" key="back">
              <MDBCardBody className="text-center">
                <MDBIcon
                  className="skill-logo light-blue-text"
                  icon={this.props.skill_data.alt_icon}
                />
                <MDBCardTitle tag="h5">{this.state.title}</MDBCardTitle>
                <MDBCardText>{this.props.skill_data.statement}</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter muted>
                <a
                  href="#!"
                  className="rotate-btn"
                  data-card="card-1"
                  onClick={this.handleFlip}
                >
                  <MDBIcon icon="redo" /> Click here to rotate back
                </a>
              </MDBCardFooter>
            </MDBCard>
          </ReactCardFlip>
        </MDBAnimation>
      </MDBCard>
    );
  }
}

export default class Skills extends Component {
  render() {
    return (
      <MDBContainer>
        <h1 style={{ textAlign: 'center' }}>
          <strong>Skills</strong>
        </h1>
        <MDBCardGroup deck>
          <Skill skill_data={skill_list.skills[0]} />
          <Skill skill_data={skill_list.skills[1]} />
          <Skill skill_data={skill_list.skills[2]} />
        </MDBCardGroup>
      </MDBContainer>
    );
  }
}
