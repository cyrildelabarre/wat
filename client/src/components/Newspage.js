import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";

export const FeaturesPage = () => {

  return (
    <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Section title
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
          <MDBRow>
            <MDBCol lg="6" md="12">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="light-blue-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="plane" className="pr-2" />
                      Travels
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    20/08/2018
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">Title of the news</a>
                </h3>
                <p className="dark-grey-text">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus.
                </p>
              </div>
            </MDBCol>

            <MDBCol lg="6" md="12">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="pink-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="home" className="pr-2" />
                      Lifestyle
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    24/08/2018
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">Title of the news</a>
                </h3>
                <p className="dark-grey-text">
                  Sed ut perspiciatis unde voluptatem omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae.
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default FeaturesPage;
