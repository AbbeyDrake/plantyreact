import React, { Component } from 'react';

class PlantCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    id: 0,
                    name: 'Trailing Plants',
                    image: 'assets/images/trailing-plant.jpg',
                    description: "Trailing plants grow vines of leaves. Plant them in hanging baskets for a dramatic effect."
                },
                {
                  id: 1,
                  name: 'Large Plants',
                  image: 'assets/images/large-plants.jpg',
                  description: "Larger plants are a perfect addition to fill up an empty space in a room."
                },
                {
                    id: 2,
                    name: 'Flowering Plants',
                    image: 'assets/images/flowering-plants.jpg',
                    description: "Flowering plants will add a welcome pop of color to your collection."
                },
                {
                    id: 3,
                    name: 'Succulent Plants',
                    image: 'assets/images/succulent-plants.jpg',
                    description: "Succulents are characterized by their ability to hold water in their leaves and stems."
                }
            ],
        };
    }

    render() {
        {
            const category = this.state.categories.map(category => {
                return (
                    <div className="row">
                        <img src={category.image} alt={category.name} />
                        <h2>{category.name}</h2>
                        <p>{category.description}</p>
                    </div>
                );
            });
    
            return (
                <div className="container">
                    <div className="row">
                        {category}
                    </div>
                </div>
            );
        }
        return (
            <div />
        );
    }
}

export default PlantCategories;