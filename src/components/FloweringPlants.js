import react, { Component } from 'react';

class FloweringPlants extends Component {
    constructor(props) {
        super(props);
        this.state = {
        floweringplantlist: [
        {
            id: 0,
            name: "Peace Lily",
            aka: "Spathiphyllum cochlearispathum",
            image: "./assets/images/peace-lily.jpg",
            featured: false,
            description: "Peace lilies do not need a lot of sunlight to thrive and are relatively easy to care for.",
            link: "https://en.wikipedia.org/wiki/Spathiphyllum_cochlearispathum"
        },
        {
            id: 1,
            name: "African Violet",
            aka: "Saintpaulia ionantha",
            image: "/assets/images/african-violet.jpg",
            featured: false,
            description: "Fiddle Leaf Figs are picky about their sunlight. If they find a spot in the sun where they thrive, they do not like to be moved.",
            link: "https://en.wikipedia.org/wiki/Streptocarpus_sect._Saintpaulia"
        },
        {
            id: 2,
            name: "Anthurium",
            aka: "Anthurium spp",
            image: "/assets/images/areca-palm.jpg ",
            featured: false,
            description: "Known for their long lasting vibrant tropical blooms, they are affectionately known as a flamingo flower and prefer warm, humid conditions.",
            link: "https://en.wikipedia.org/wiki/Anthurium"
        },
    
    ]
}
};

render() {
    const floweringlist = this.state.floweringplantlist.map((floweringlist) => {
        return (
            
            <React.Fragment>
                <Media
                object
                src={floweringlist.image}
                alt={floweringlist.name}
                width='150'
                />
                <Media body className='ml-5 mb-4'>
                <Media heading>{floweringlist.name} {floweringlist.aka}</Media> {floweringlist.description} {floweringlist.link}
                </Media>
            </React.Fragment>
        );
    });
    
}
}

export default FloweringPlants;