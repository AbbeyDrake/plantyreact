import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { LOCALSHOPS } from './LocalShopsList';
import { Link } from 'react-router-dom';


function LocalShopsCarousel() {
    
        return( 
        <Carousel autoPlay showArrows infiniteLoop centerMode centerSlidePercentage={80}> 
            {LOCALSHOPS.map((localshop)=>{
                return(
                    <Link key = {localshop.id} to = {`/localshops/${localshop.id}`}>
                        <div >
                            <img className = "carousel-image" src={localshop.image}/>
                        </div>
                    </Link>
                )
            })}   
         </Carousel>
        );
    
};

export default LocalShopsCarousel
