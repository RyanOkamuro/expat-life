import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class BannerCarousel extends Component {
    render() {
        let bannerPhotos = (
            <Carousel>
                <Carousel.Item>
                    <img className='banner' alt='banner' src='https://github.com/RyanOkamuro/expat-life/blob/feature/banner_carousel/public/assets/Santorini/Santorini.JPG?raw=true' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='banner' alt='banner' src='https://github.com/RyanOkamuro/expat-life/blob/master/public/assets/AlmafiCoast/Positano.JPG?raw=true' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='banner' alt='banner' src='https://github.com/RyanOkamuro/expat-life/blob/master/public/assets/Athens/Parthenon_Banner.JPG?raw=true' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='banner' alt='banner' src='https://github.com/RyanOkamuro/expat-life/blob/master/public/assets/Beijing/Paper_Factory_Banner.JPG?raw=true' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='banner' alt='banner' src='https://github.com/RyanOkamuro/expat-life/blob/master/public/assets/Beijing/Study_Abroad_UIBE_Banner.JPG?raw=true' />
                </Carousel.Item>
            </Carousel>
        );
        return (
            <div className='banner-container'>
                {bannerPhotos}
            </div>
        );
    }
}

export default BannerCarousel;