import React, { Component } from 'react';
import './StudyAbroadPosts.css';

class StudyAbroadPosts extends Component {
    render() {
        return (
            <div className='study-abroad-posts'>
                <img className='study-abroad-images' alt='study-abroad-images' src={this.props.blogPost.image}></img>
                <p className='study-abroad-description'>{this.props.blogPost.caption}</p>
            </div>
        );
    }
}

export default StudyAbroadPosts;