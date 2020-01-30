import React, { Component } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon
} from 'mdbreact';

export default class Footer extends Component {
  handleClick = url => {
    if (url === 'mailto:qoutland@gmail.com') {
      console.log('mailing');
      window.open(url);
    }
    window.open(url, '_blank');
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="socials">
              <MDBBtn
                className="social lin"
                size="lg"
                color=""
                tag="a"
                floating
                href="https://linkedin.com/in/qoutland"
                target="_blank"
              >
                <MDBIcon className="social_icon" fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn
                className="social"
                size="lg"
                tag="a"
                floating
                color="black"
                href="https://github.com/qoutland"
                target="_blank"
              >
                <MDBIcon className="social_icon" fab icon="github" />
              </MDBBtn>
              <MDBBtn
                className="social mail"
                size="lg"
                tag="a"
                floating
                color="#4b515d"
                href="mailto:qoutland@gmail.com"
              >
                <MDBIcon icon="envelope" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <br />
        <MDBFooter className="foot" color="blue-gradient">
          <div className="footer-copyright text-center py-2">
            <MDBContainer>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <a href="https://quinoutland.com"> quinoutland.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}
