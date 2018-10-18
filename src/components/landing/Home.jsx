import React, { Component } from 'react';
import BloggingLanding from './BloggingLanding';
import './Home.css';

class Home extends Component {
    render() {
        const blogPosts = this.props.blogPosts.map((blogPost, index) => (
            <div className='blog-entry' key={index}>
                <BloggingLanding blogPost={blogPost} />
            </div>
        ))
        return (
            <div>
                <section className='home-banner-container'>
                    <img src='assets/Santorini/Santorini.jpg' className='home-banner' alt='home-banner'></img>
                </section>
                <section className='landing-profile'>
                    <img src='assets/Me/me.jpg' className='profile-landing-pic' alt='profile-landing-pic'></img>
                    <div className='landing-about'>
                        <h1>Welcome to the Expat</h1> 
                        <p className='landing-bio'>Since 2009, I have been coming back and forth from living abroad.  
                        In total, it has been 6 years.  The experiences I had from meeting new people to understanding a 
                        different culture changed my perspective on life.</p>
                    </div>
                </section>
                <section className='landing-featured-article-container'>
                <h2 className='featured-article-heading'>Featured Articles</h2> 
                <div className='landing-featured-articles'>
                    {blogPosts}
                </div>
                </section>
                
            </div>
        );
    }
}

export default Home;