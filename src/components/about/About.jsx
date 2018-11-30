import React, { Component } from 'react';
import MyStory from './MyStory';
import AboutBio from './AboutBio';
import BannerCarousel from '../banner/BannerCarousel';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='about-page'>
                <BannerCarousel />
                <section className='about-me'>
                    <img src='https://github.com/RyanOkamuro/expat-life/blob/master/public/assets/Me/Business_Class.JPG?raw=true' className='profile-about-pic' alt='profile-about-pic'></img>
                    <AboutBio />
                </section>
                <section className='about-me-timeline'>
                    <MyStory />
                </section>
            </div>
        );
    }
}

export default About;