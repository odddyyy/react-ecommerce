import React from 'react'

//bootstrap components
import { Carousel } from 'react-bootstrap'

//Banner imports
import banner1 from '../img/carousel/1.jpg'
import banner2 from '../img/carousel/2.jpg'
import banner3 from '../img/carousel/3.jpg'

export default function Carousels() {

    //banners
    const bannersArray = [banner1, banner2, banner3]

    return (
        <Carousel controls={false} className="carousel-container" pause={false}>
            {bannersArray.map((banner, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="carousel-image"
                        src={banner}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
