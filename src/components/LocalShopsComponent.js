import React from 'react';
import { Card, CardBody, CardHeader, Media} from 'reactstrap';
import NewsletterComponent from './NewsletterComponent';
import Iframe from 'react-iframe';

function LocalShopsComponent(props) {
  return (
    <div>
        <div className="container m-3 my-5">
            <h1>Local Shops</h1>
            <div className="row">
                <div className="col-sm-6 mt-3">
                    <h3>Find Your Local Green Spots!</h3>
                    <h5>Denver, Colorado</h5>
                    <p>Looking for unique, local plant shops and nurseries to grow your plant family? Denver is home to many plant havens where you can browse extensive collections, take classes and learn more about plant care, and connect with the community through events. </p>
                    <div  className="form-row justify-content-center">
                        <a type="button" href="#localCarousel" className="btn btn-sm btn-dark mt-2 mb-3">See More</a>
                    </div>
                </div>
                <div className="col mb-4">

                    <Card className="card-cascade-narrower">
                        <CardHeader className="align-self-center mt-2">
                            <h5 className="mb-0">Map of Local Shops</h5>
                        </CardHeader>

                        <CardBody className="card-body-cascade text-center">
                           
                                <div id="map-container-google-9" className="z-depth-1-half map-container-5" style={{height: 20 + "rem"}}>
                                    <Iframe 
                                        url ="https://www.google.com/maps/d/embed?mid=1NJZfwC2LP7KC90dWXwhYxGynWB9-ZuFS&ehbc=2E312F"
                                        border= "none"
                                        width= "450px"
                                        height= "300px"
                                        allowFullScreen />
                                
                                </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        <hr></hr>
        <NewsletterComponent></NewsletterComponent>
    </div>
  );
}

export default LocalShopsComponent;
