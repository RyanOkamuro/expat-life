import React, { Component } from 'react';
import './AboutBio.css';

class AboutBio extends Component {
    render() {
        return (
            <div className='profile-about'>
                <h2 className='welcome-about-heading'>Welcome to the Expat</h2> 
                <p className='about-bio'>Since 2009, I have been coming back and forth from living abroad.  
                In total, it has been 6 years.  The experiences I had from meeting new people to understanding a 
                different culture changed my perspective on life.</p>
            </div>
        );
    }
}

export default AboutBio;