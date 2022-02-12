import React, { Component } from "react";
import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
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
        <CardGroup className='row'>
          <a type='button' onClick={category.link}>
            <Card className='category col center'>
              <CardHeader>{category.name}</CardHeader>
              <CardTitle>{category.aka}</CardTitle>
              <CardBody>
                <CardImg src={category.image} width="20" alt={category.name} />
                <CardText>{category.description}</CardText>
              </CardBody>
            </Card>
          </a>
        </CardGroup>
      );
    });

    return (
      <div className="container align-self-center">
        <div className='row my-3'>{category}</div>
      </div>
    );
  }
}

export default PlantCategories;
