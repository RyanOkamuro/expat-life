import React, { Component } from 'react';
import StudyAbroadPosts from './StudyAbroadPosts';
import './StudyAbroad.css';

class StudyAbroad extends Component {
    render() {
        let blogCategory = this.props.blogPosts.filter((post) => {
            return post.category === 'Study_Abroad';
        })
        const blogPosts = blogCategory.map((blogPost, index) => (
            <div className='study-abroad-entry' key={index}>
                <StudyAbroadPosts blogPost={blogPost} />
            </div>
        ))
        return (
            <div>
                <section className='study-abroad-banner-container'>
                    <img src='assets/Beijing/Study_Abroad_UIBE_Banner.jpg' className='study-abroad-banner' alt='study-abroad-banner'></img>
                </section>
                <section className='study-abroad-article-container'>
                    <h1 className='study-abroad-heading'>Study Abroad Articles</h1>
                    <div className='study-abroad-articles'>
                        {blogPosts}
                    </div>
                </section>
            </div>
        );
    }
}

export default StudyAbroad;