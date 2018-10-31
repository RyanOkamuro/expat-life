import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './BloggingLanding.css'

class BloggingLanding extends Component {
    render() {
        let blogArticle = {
            pathname: '/featured/' + this.props.blogPost.id,
            blogPosts: this.props.blogPost
        }
        return (
            <div className='landing-featured-posts'>
                <Link to={blogArticle}><img className='landing-featured-images' alt='landing-featured-img' src={this.props.blogPost.image}></img></Link>
                <p className='landing-featured-description'>{this.props.blogPost.caption}</p>
            </div>
        );
    }
}

export default BloggingLanding;