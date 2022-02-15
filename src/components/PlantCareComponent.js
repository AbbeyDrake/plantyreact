import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  Container,
  Row,
  Media
} from "reactstrap";
import { PlantCategories, TrailingPlants, LargePlants, FloweringPlants, SucculentPlants } from "./PlantCategories";
import NewsletterComponent from "./NewsletterComponent";




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
            <img
              src='./assets/images/watering-houseplant.jpg'
              height='350'
              alt='watering houseplants'
              className='mw-100'
            />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row-sm-6 my-3'>
          <Card className="align-self-center">
            <CardHeader>
              <h3>Care at a Glance</h3>
            </CardHeader>
            <CardBody className='align-self-center'>
              <Row>
              <img src="./assets/images/sun.svg" height='40' width='40' alt='Sun Icon' />
                <p>
                  Some plants prefer lots of light, and some do best in the
                  shade.
                </p>
              </Row>
              <Row>
              <img src="./assets/images/water.svg" height='40' width='40' alt='Water icon' />
                <p>
                  There are plants that drink a lot of water, and others that
                  prefer less.
                </p>
              </Row>
            </CardBody>
          </Card>
        </div>
      </div>

    <Container>
        <Row className="my-5">
            <PlantCategories />
        </Row>
     </Container>
       

 
    <Row>
        <Container className="my-5 list-group">
            <h3>Trailing Plants</h3>
               <li className="list-group-item"><TrailingPlants /></li>
            <h3>Large Plants</h3>
                <li className="list-group-item"><LargePlants /></li>
            <h3>Flowering Plants</h3>
                <li className="list-group-item"><FloweringPlants /></li>
            <h3>Succulent Plants</h3>
                <li className="list-group-item"><SucculentPlants /></li>
        
        </Container>
    </Row>


        <Row>
          <Container className="my-5">
          <div><NewsletterComponent /></div>
          </Container>
        </Row>



    </div>
  

  );
}

export default PlantCareComponent;
