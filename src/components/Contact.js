import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
  MDBInput
} from 'mdbreact';

export default class Contact extends Component {
  state = {
    modal6: false,
    modal7: false
  };

  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    return (
      <div>
        <MDBBtn className="contact" onClick={this.toggle(8)}>
          <MDBIcon icon="comment" />
        </MDBBtn>
        <MDBContainer>
          <MDBModal
            isOpen={this.state.modal8}
            toggle={this.toggle(8)}
            fullHeight
            position="right"
          >
            <MDBModalHeader toggle={this.toggle(8)}>Contact me</MDBModalHeader>
            <form
              action="https://formspree.io/qoutland@gmail.com"
              method="POST"
            >
              <MDBModalBody>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="name"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="_replyto"
                  />
                  <MDBInput
                    label="Subject"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="_subject"
                  />
                  <MDBInput
                    type="textarea"
                    rows="4"
                    label="Your message"
                    icon="pencil-alt"
                    name="message"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://quinoutland.com/thanks"
                  />
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="danger" onClick={this.toggle(8)}>
                  Close
                </MDBBtn>
                <MDBBtn color="success" type="submit">
                  Send Message &nbsp;
                  <MDBIcon far icon="paper-plane" />
                </MDBBtn>
              </MDBModalFooter>
            </form>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}
