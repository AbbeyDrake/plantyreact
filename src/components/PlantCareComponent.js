import React from 'react';
import { Card, CardBody, CardHeader, Row } from 'reactstrap';


function PlantCareComponent(props) {
  return (
    <div>
        <div className="container m-3">
            <h1>Plant Care</h1>
            <div className="row">
                <div className="col-sm-6 mt-3">
                    <h3></h3>
                    <p>Interested in caring for a plant but don’t know which would be the best fit for you? Different plants require different environments and varying levels of care. Our Plant Care Guide helps take the guesswork out of your plant maintenance and helps keep your growing collection happy and healthy.</p>
                </div>
                <div className="col-sm-6 mb-4">

      
                    <Card>
                        <CardHeader fluid>
                            <h5 className="mb-0">Care at a Glance</h5>
                        </CardHeader>
                        <CardBody className="card-body text-center">
                        <Row>
                        <i class="fa fa-solid fa-sun fa-4x" />
                        <p>Some plants prefer lots of light, and some do best in the shade.</p>
                        </Row>
                        <Row>
                        <i class="fa fa-solid fa-sun fa-4x" />
                        <p>There are plants that drink a lot of water, and others that prefer less.</p>
                        </Row>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}


export default PlantCareComponent;
