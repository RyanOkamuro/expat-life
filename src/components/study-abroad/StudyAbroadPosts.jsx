import React, { Component } from 'react';
import './StudyAbroadPosts.css';

class StudyAbroadPosts extends Component {
    render() {
        return (
            <div className='blog-post-container'>
                <img className='blog-image' alt='blog-image' src={this.props.blogPost.image}></img>
                <p className='blog-description'>{this.props.blogPost.caption}</p>
            </div>
        );
    }
}

export default StudyAbroadPosts;