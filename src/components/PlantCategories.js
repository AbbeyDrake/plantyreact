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
import { TRAILINGPLANTS } from "./TrailingPlants";
import { LARGEPLANTS } from "./LargePlants";
import { FLOWERINGPLANTS } from "./FloweringPlants";
import { SUCCULENTPLANTS } from "./SucculentPlants";


function PlantCategories(){

      const category = CATEGORIES.map(category => {
        return(
      
      
          <a type='button' onClick={category.link}>
            <Card className="categoryCard">
              <CardHeader>{category.name}</CardHeader>
              <CardTitle>{category.aka}</CardTitle>
              <CardBody>
                <CardImg src={category.image} alt={category.name} />
                <CardText>{category.description}</CardText>
              </CardBody>
            </Card>
          </a>
    
  
        );  
      })
  
    return(
      <div className="row">
        {category}
      </div>
    );
}



function TrailingPlants(){

      const trailingPlants = TRAILINGPLANTS.map(trailingPlants => {
        return(
          <div className="row plantList">
            <Media className="col-sm-2"
              object
              src={trailingPlants.image}
              alt={trailingPlants.name}
              width='20'
            />
            <div className="col">
              <Media heading>{trailingPlants.name}</Media>
              <Media body> {trailingPlants.description}</Media>
            </div>
          </div>
      );
    })
    return(
      <div className="row">
        {trailingPlants}
      </div>
    );
};

function LargePlants(){

  const largePlants = LARGEPLANTS.map(largePlants => {
    return(
      <div className="row plantList">
        <Media className="col-sm-2"
          object
          src={largePlants.image}
          alt={largePlants.name}
          width='20'
        />
        <div className="col">
          <Media heading>{largePlants.name}</Media>
          <Media body> {largePlants.description}</Media>
        </div>
      </div>
  );
})
return(
  <div className="row">
    {largePlants}
  </div>
);
};

function FloweringPlants(){

  const floweringPlants = FLOWERINGPLANTS.map(floweringPlants => {
    return(
      <div className="row plantList">
        <Media className="col-sm-2"
          object
          src={floweringPlants.image}
          alt={floweringPlants.name}
          width='20'
        />
        <div className="col">
          <Media heading>{floweringPlants.name}</Media>
          <Media body> {floweringPlants.description}</Media>
        </div>
      </div>
  );
})
return(
  <div className="row">
    {floweringPlants}
  </div>
);
};

function SucculentPlants(){

  const succulentPlants = SUCCULENTPLANTS.map(succulentPlants => {
    return(
      <div className="row plantList">
        <Media className="col-sm-2"
          object
          src={succulentPlants.image}
          alt={succulentPlants.name}
          width='20'
        />
        <div className="col">
          <Media heading>{succulentPlants.name}</Media>
          <Media body> {succulentPlants.description}</Media>
        </div>
      </div>
  );
})
return(
  <div className="row">
    {succulentPlants}
  </div>
);
};

export {PlantCategories, TrailingPlants, LargePlants, FloweringPlants, SucculentPlants};