import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
state = {
  modal14: false
}

componentWillMount() {
    if (window.location.pathname === '/thanks') {
        this.setState({modal14: true})
    }
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  window.location.pathname='/';
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
  
}

render() {
  return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Thank you for your submission</MDBModalHeader>
          <MDBModalBody>
            Quin will reply to your inquiry within 24 hours.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="info" onClick={this.toggle(14)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;