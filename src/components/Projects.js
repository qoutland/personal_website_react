import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import project_list from '../assets/project_list';
import docent from '../assets/docent.png'
class Project extends Component {
    render() {
        return (
            <MDBCol md="4" className="clearfix d-none d-md-block full100">
                <MDBCard className="mb-2">
                <MDBCardImage className="img-fluid" src={this.props.project.img} />
                <MDBCardBody>
                    <MDBCardTitle>{this.props.project.title}</MDBCardTitle>
                    <MDBCardText>
                    {this.props.project.description}
                    </MDBCardText>
                    <MDBCardText muted small>
                    Technologies used: <strong>{this.props.project.technologies}</strong>
                    </MDBCardText>
                    <a href={this.props.project.url}><MDBBtn color="primary">View Project</MDBBtn></a>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>            
        )
    }
}

export default class Projects extends Component {

    createItems = (projects) => {
        return projects.map(function(project, i) {
        return <Project project={project} />
        });
    }
    render() {
        return (
            <MDBContainer >
                <h1 style={{textAlign: 'center'}}>Projects</h1>
                <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
                    <MDBCarouselInner>
                    <MDBRow>
                        <MDBCarouselItem itemId="1">
                            {this.createItems(project_list.projects.slice(0,3))}
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            {this.createItems(project_list.projects.slice(3,6))}
                        </MDBCarouselItem>
                        
                    </MDBRow>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        )
    }
}