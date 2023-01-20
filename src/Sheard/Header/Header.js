import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';
import carousel1 from '../../images/carousel-1.jpeg';
import carousel2 from '../../images/carousel-2.jpeg';
import carousel3 from '../../images/carousel-3.jpeg';


const Header = () => {
    return (
        <div>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;