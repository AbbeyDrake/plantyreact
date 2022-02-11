import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardHeader, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import NewsletterComponent from './NewsletterComponent';
import Iframe from 'react-iframe';
import LocalShopsCarousel from './LocalShopsCarousel';
import { LOCALSHOPS } from './LocalShopsList'


// make function RenderLocalShop HERE (similar to Directory). The Link will change the url path and display the localshopinfo for one shop


function RenderLocalShop({localshop}){
    return(
        <Card>
            <Link to={`/localshops/${localshop.id}`}>
                <CardImg style={{width: 18 + "rem"}} src = {localshop.image} alt = {localshop.name}/>
            </Link>
        </Card>
    );
}

function LocalShopsComponent(props) {
    console.log(props)

    const directory = LOCALSHOPS.map(localshop => {
        console.log(localshop)
        return (
            <div key = {localshop.id} className = "col-md-5 m-1">
               <RenderLocalShop localshop = {localshop}/>
            </div>
        );

    });
  
    return (
    <div>
        <div className="container m-3 my-5">
            
            <h1>Local Shops</h1>
            <Row>
                <Col className="col-sm-6 mt-3">
                    <h3>Find Your Local Green Spots!</h3>
                    <h5>Denver, Colorado</h5>
                    <p>Looking for unique, local plant shops and nurseries to grow your plant family? Denver is home to many plant havens where you can browse extensive collections, take classes and learn more about plant care, and connect with the community through events. </p>
                    <div  className="form-row justify-content-center">
                        <a type="button" href="#directory" className="btn btn-sm btn-dark mt-2 mb-3">See More</a>
                    </div>
                </Col>
                <Col className="col mb-4">

                    <Card className="card-cascade-narrower">
                        <CardHeader className="align-self-center mt-2">
                            <h5 className="mb-0">Map of Local Shops</h5>
                        </CardHeader>

                        <CardBody className="card-body-cascade text-center">
                           
                                <div id="map-container-google-9" className="z-depth-1-half map-container-5" style={{height: 20 + "rem"}}>
                                    <Iframe 
                                        url ="https://www.google.com/maps/d/embed?mid=1NJZfwC2LP7KC90dWXwhYxGynWB9-ZuFS&ehbc=2E312F"
                                        border= "none"
                                        width= "100%"
                                        height= "100%"
                                        allowFullScreen 
                                    />
                                
                                </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
            <LocalShopsCarousel></LocalShopsCarousel>
           <hr></hr>
            <Row>
                {directory}
            </Row>
        </div>
        <hr></hr>
        <NewsletterComponent></NewsletterComponent>
    </div>
  );
}

export default LocalShopsComponent;
