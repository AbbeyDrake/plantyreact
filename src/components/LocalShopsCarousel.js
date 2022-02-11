import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class LocalShopsCarousel extends Component {
    render() {
        return( <Carousel> 
                <div>
                    <img src="./images/birdsall" />
                    <p>"Birdsall is a locally-owned family business run by women with two locations in Denver. They are known best for their massive selection of outdoor containers and have an ever-rotating selection of houseplants."</p>
                </div>
                <div>
                    <img src="./images/bronzepetal" />
                    <p >"The Bronze Petal, Ltd. is a Denver, Colorado based Aroid small business that specializes in the sale and education of common, uncommon, rar in the Mile High City. These aroids are classified as ultra-rare or extraordinarily difficult to obtain, and The Bronze Petal strives to carry these heavily sought after beauties as long as they are available from reputable sources. Check out some of their upcoming events"</p>
                </div>
            </Carousel>
        );
    }
};

export default LocalShopsCarousel
