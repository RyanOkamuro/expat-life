import React, { Component } from 'react';
import './TravelAbroadPosts.css';
import { Link } from 'react-router-dom';

class TravelAbroadPosts extends Component {
    render() {
        let blogArticle = {
            pathname: '/travel-abroad/' + this.props.blogPost.id,
            blogPosts: this.props.blogPost
        }
        return (
            <div className='blog-post-container'>
                <Link to={blogArticle}><img className='blog-image' alt='blog-img' src={this.props.blogPost.image}></img></Link>
                <p className='blog-description'>{this.props.blogPost.caption}</p>
            </div>
        );
    }
}

export default TravelAbroadPosts;