import React, { Component } from 'react';
import './BloggingLanding.css'

class BloggingLanding extends Component {
    render() {
        return (
            <div className='landing-featured-posts'>
                <h3>{this.props.blogPost.title}</h3>
                <p>{this.props.blogPost.blogEntry}</p>
            </div>
        );
    }
}

export default BloggingLanding;