import React, { Component } from 'react';
import MyStory from './MyStory';
import AboutBio from './AboutBio';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='about-page'>
                <section className='about-banner-container'>
                    <img src='https://github.com/RyanOkamuro/expat-life/blob/master/public/assets/Budapest/Fishermans_Bastion.JPG?raw=true' className='about-banner' alt='about-banner'></img>
                </section>
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