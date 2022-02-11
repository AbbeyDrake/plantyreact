import React, { Component } from "react";


class SucculentPlants extends Component {
    constructor(props) {
        super(props);
        this.state = {
        succulentplantlist: [
    {
        id: 0,
        name: "Snake Plant",
        aka: "Dracena trifasciata",
        image: "./assets/images/snake-plant.jpg",
        featured: false,
        description: "Known also as 'mother-in-law's tongue,' snake plants are one of the most popular low maintenance indoor plants.",
        link: "https://en.wikipedia.org/wiki/Dracaena_trifasciata"
    },
    {
        id: 1,
        name: "Aloe Vera",
        aka: "Aloe vera",
        image: "/assets/images/aloe-vera.jpg",
        featured: false,
        description: "Aloe vera plants are popular for their medicinal properties. Their gel is commonly used to treat skin conditions like burns and wounds.",
        link: "https://en.wikipedia.org/wiki/Aloe_vera"
    },
    {
        id: 2,
        name: "String of Hearts",
        aka: "Ceropegia woodii",
        image: "/assets/images/string-of-hearts.jpg ",
        featured: false,
        description: "These heart shaped vine plants love the sunlight and bloom white and light purple flowers in the spring and summer months.",
        link: "https://en.wikipedia.org/wiki/Ceropegia_woodii"
    },
]
        }
    }

    render() {
        const succulentlist = this.state.succulentplantlist.map((succulentlist) => {
            return (
                
                <React.Fragment>
                    <Media
                    object
                    src={succulentlist.image}
                    alt={succulentlist.name}
                    width='150'
                    />
                    <Media body className='ml-5 mb-4'>
                    <Media heading>{succulentlist.name} {succulentlist.aka}</Media> {succulentlist.description} {succulentlist.link}
                    </Media>
                </React.Fragment>
            );
        });
        
    }
}


export default SucculentPlants;