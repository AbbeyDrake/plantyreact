import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label} from 'reactstrap';
import { Link } from 'react-router-dom';

function LocalShopInfo(props) {
  
      if (props.localshop) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/localshops'>Local Shops</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.localshop.name}</BreadcrumbItem>
                            </Breadcrumb>
                        <h2>{props.localshop.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className = "row">
                  <div className = "col-md-6 m-1">
                      <Card>
                          <CardImg top src={props.localshop.image} alt={props.localshop.name}/>
                          <CardBody>
                              <CardText>{props.localshop.description}</CardText>
                          </CardBody>
                      </Card>
                   </div>
                </div> 
            </div>
                        
        );
    } 
        else {
        return (
            <div></div>
        );
    }
}


export default LocalShopInfo;