import React, { Component } from 'react';
import './BloggingLanding.css'

class BloggingLanding extends Component {
    render() {
        return (
            <div className='landing-featured-posts'>
                <img className='landing-featured-images' alt='landing-featured-img' src={this.props.blogPost.image}></img>
                <p className='landing-featured-description'>{this.props.blogPost.caption}</p>
            </div>
        );
    }
}

export default BloggingLanding;