import React, { Component } from 'react';
import './BloggingLanding.css'

class BloggingLanding extends Component {
    render() {
        return (
            <div className='landing-featured-posts'>
                <h3>{this.props.blogPost.title}</h3>
                <img className='landing-featured-images' src={this.props.blogPost.image}></img>
                <p className='landing-featured-description'>{this.props.blogPost.blogEntry}</p>
            </div>
        );
    }
}

export default BloggingLanding;