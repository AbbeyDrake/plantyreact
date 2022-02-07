import React from "react";
import { Card, CardBody, CardHeader, Row } from "reactstrap";
import PlantCategories from "./PlantCategories";
import NewsletterComponent from './NewsletterComponent';

function PlantCareComponent(props) {
  return (
    <div>
      <div className='container my-5'>
        <h1>Plant Care</h1>
        <div className='row'>
          <div className='col-lg-5 my-3'>
            <p>
              Interested in caring for a plant but don’t know which would be the
              best fit for you? Different plants require different environments
              and varying levels of care. Our Plant Care Guide helps take the
              guesswork out of your plant maintenance and helps keep your
              growing collection healthy.
            </p>
          </div>
          <div className='media-body align-self-center col my-3'>
            <img src='./assets/images/watering-houseplant.jpg' height='350' alt='watering houseplants' className='mw-100'/>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row-sm-6 my-3'>
          <Card>
            <CardHeader>
              <h3>Care at a Glance</h3>
            </CardHeader>
            <CardBody className='align-content-center'>
              <Row>
                <i class='fa fa-solid fa-sun fa-4x' />
                <p>
                  Some plants prefer lots of light, and some do best in the
                  shade.
                </p>
              </Row>
              <Row>
                <i className='fa fa-solid fa-water fa-4x' />
                <p>
                  There are plants that drink a lot of water, and others that
                  prefer less.
                </p>
              </Row>
            </CardBody>
          </Card>
        </div>
        <Row>
         {/* <!--  <PlantCategories /> --> */}
        </Row>
      </div>
      <NewsletterComponent></NewsletterComponent>
    </div>
  );
}

export default PlantCareComponent;
