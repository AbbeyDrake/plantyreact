import React from 'react';
import { Card, CardBody, CardHeader} from 'reactstrap';

function LocalShopsComponent(props) {
  return (
    <div>
        <div className="container m-3">
            <h1>Local Shops</h1>
            <div className="row">
                <div className="col-sm-6 mt-3">
                    <h3>Find Your Local Green Spots!</h3>
                    <h5>Denver, Colorado</h5>
                    <p>Looking for unique, local plant shops and nurseries to grow your plant family? Denver is home to many plant havens where you can browse extensive collections, take classNamees and learn more about plant care, and connect with the community through events. </p>
                    <div  className="form-row justify-content-center">
                        <a type="button" href="#localCarousel" className="btn btn-sm btn-dark mt-2 mb-3">See More</a>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">

                    {/* <!--Card--> */}
                    <Card className="card-cascade narrower">
                
                        {/* <!--Card image--> */}
                        <CardHeader className="align-self-center mt-2">
                            <h5 className="mb-0">Map of Local Shops</h5>
                        </CardHeader>
                        {/* <!--/Card image-->
                
                    <!--Card content--> */}
                        <CardBody className="card-body-cascade text-center">
                            {/* <!--Google map--> */}
                                <div id="map-container-google-9" className="z-depth-1-half map-container-5" style={{height: 300 + 'px'}}>
                                    {/* <iframe src="https://www.google.com/maps/d/embed?mid=1NJZfwC2LP7KC90dWXwhYxGynWB9-ZuFS&ehbc=2E312F" width="640" height="480"frameBorder="0"
                                    style="border:0" allowFullScreen></iframe> */}
                                
                                </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LocalShopsComponent;
