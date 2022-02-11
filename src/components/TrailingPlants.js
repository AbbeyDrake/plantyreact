import React, { Component } from "react";



class TrailingPlants extends Component {
    constructor(props) {
        super(props);
        this.state = {
        trailingplantlist: [
 
    {
        id: 0,
        name: "Pothos",
        aka: "Epipremnum aureum",
        image: "./assets/images/pothos.jpg",
        featured: false,
        description: "Also known as devil's ivy, a healthy pothos can grow hundreds of feet of leafy vines. They come in a variety of colors and patterns.",
        link: "https://en.wikipedia.org/wiki/Epipremnum_aureum"
    },
    {
        id: 1,
        name: "Spider Plant",
        aka: "Chlorophytum comosum",
        image: "/assets/images/spider-plant.jpg",
        featured: false,
        description: "A happy and healthy spider plant will reward you with lots of 'babies' grown from their vines which can be potted and grown into entirely new plants.",
        link: "https://en.wikipedia.org/wiki/Chlorophytum_comosum"
    },
    {
        id: 2,
        name: "Maranta",
        aka: "Maranta leuconeura",
        image: "/assets/images/marnta-prayer-plant.jpg ",
        featured: false,
        description: "One of the most stunning types of prayer plants, Marantas have red ribs on their leaves that look striking against their dark green foliage.",
        link: "https://en.wikipedia.org/wiki/Maranta_leuconeura"
    },
 ]
    }
}

render() {
    const trailinglist = this.state.trailingplantlist.map((trailinglist) => {
            return (
                <React.Fragment>
                    <Media
                    object
                    src={trailinglist.image}
                    alt={trailinglist.name}
                    width='150'
                    />
                    <Media body className='ml-5 mb-4'>
                    <Media heading>{trailinglist.name} {trailinglist.aka}</Media> {trailinglist.description} {trailinglist.link}
                    </Media>
                </React.Fragment>
            );
        });
      }
    }
    
export default PlantLists;