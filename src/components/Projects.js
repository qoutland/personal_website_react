import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import project_list from '../assets/project_list';

class Project extends Component {
    render() {
        return (
            <MDBCol md="4" className="clearfix d-none d-md-block full100">
                <MDBCard className="mb-4 project" >
                <MDBCardImage className={this.props.project.img} alt={this.props.project.img_alt}/>
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
    constructor(props) {
        super(props);
        this.state = {
            listLen: 2
        }
    }
    componentWillMount() {
        if (window.innerWidth <= 500) {
            this.setState({listLen: 5})
        }
    }
    createItems = (projects) => {
        return projects.map(function(project, i) {
        return <Project project={project} key={i} />
        });
    };

    createItem = (projects) => {
        console.log(projects)
        return projects.map(function(project, i) {
            console.log(project)
            console.log(i)
            return (
            <MDBCarouselItem itemId={i+1} key={i}>
                <Project project={project} key={i} />
            </MDBCarouselItem>
        )})
    };

    showProjects= () => {
        if (window.innerWidth <= 500) {
            return (
            <MDBRow className="d-flex align-items-stretch">
                {this.createItem(project_list.projects)}
            </MDBRow>
            )
        } else {
            return(
                <MDBRow className="d-flex align-items-stretch">
                    <MDBCarouselItem itemId="1">
                        {this.createItems(project_list.projects.slice(0,3))}
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        {this.createItems(project_list.projects.slice(3,6))}
                    </MDBCarouselItem>
                </MDBRow>
            )
        }
    };

    render() {
        console.log(this.state.listLen)
        return (
            <MDBContainer >
                <h1 style={{textAlign: 'center'}}>Projects</h1>
                <MDBCarousel activeItem={1} length={this.state.listLen} slide={true} showControls={true} showIndicators={true} multiItem>
                    <MDBCarouselInner role="listbox">
                    {this.showProjects()}
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        )
    }
}