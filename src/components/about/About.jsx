import React, { Component } from 'react';
import MyStory from './MyStory';
import AboutBio from './AboutBio';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <section className='about-banner-container'>
                    <img src='assets/Budapest/Fishermans_Bastion.jpg' className='about-banner' alt='about-banner'></img>
                </section>
                <section className='about-me'>
                    <img src='assets/Me/Business_Class.jpg' className='profile-about-pic' alt='profile-about-pic'></img>
                    <AboutBio />
                </section>
                {/* <hr></hr> */}
                <section className='about-me-timeline'>
                    <MyStory />
                </section>
            </div>
        );
    }
}

export default About;