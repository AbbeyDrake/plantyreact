import React, { Component } from "react";
import {
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  Container,
  CardGroup,
  Card,
  Row,
  Media,
  CardFooter,
} from "reactstrap";
import { CATEGORIES } from "./PlantTypes";



class PlantCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES,
    };
  }

  render() {
    const category = this.state.categories.map((category) => {
      return (
        
          <CardGroup className="row">
          <Card className="category col center">
            <CardHeader>{category.name}</CardHeader>
            <CardBody>
            <CardImg
              src={category.image}
              alt={category.name}
            />
            <CardText>{category.description}</CardText>
            </CardBody>
            
              <button fluid className=" btn btn-secondary btn-fluid" onClick={this.state}>Learn More</button>
          
          </Card>
          </CardGroup>
        
        
        
      
      );
    });

    return (
      <div className='container'>
        <div className='row my-3'>{category}</div>
      </div>
    );
  }
}

export default PlantCategories;
