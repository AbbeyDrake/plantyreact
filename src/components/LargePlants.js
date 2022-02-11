import react, { Component } from 'react';



class LargePlants extends Component {
    constructor(props) {
        super(props);
        this.state = {
        largeplantlist: [
 
            {
                id: 0,
                name: "Monstera",
                aka: "Monstera deliciosa",
                image: "./assets/images/monstera-plant.jpg",
                featured: false,
                description: "Though it is typically kept as a house plant, monsteras also produce fruit that tastes like a combination of a banana and a pineapple.",
                link: "https://en.wikipedia.org/wiki/Monstera_deliciosa"
            },
            {
                id: 1,
                name: "Fiddle Leaf Fig",
                aka: "Ficus lyrata",
                image: "/assets/images/fiddle-leaf-fig.jpg",
                featured: false,
                description: "Fiddle Leaf Figs are picky about their sunlight. If they find a spot in the sun where they thrive, they do not like to be moved.",
                link: "https://en.wikipedia.org/wiki/Ficus_lyrata"
            },
            {
                id: 2,
                name: "Areca Palm",
                aka: "Dypsis lutescens",
                image: "/assets/images/areca-palm.jpg ",
                featured: false,
                description: "Other common names for the Areca Palm are 'golden cane palm' and 'butterfly palm'. They can grow up to 8ft tall.",
                link: "https://en.wikipedia.org/wiki/Dypsis_lutescens"
            },
 ]
    }
};

render() {
    const largelist = this.state.largeplantlist.map((largelist) => {
        return (
            
            <React.Fragment>
                <Media
                object
                src={largelist.image}
                alt={largelist.name}
                width='150'
                />
                <Media body className='ml-5 mb-4'>
                <Media heading>{largelist.name} {largelist.aka}</Media> {largelist.description} {largelist.link}
                </Media>
            </React.Fragment>
        );
    });
    
}

}

export default LargePlants;