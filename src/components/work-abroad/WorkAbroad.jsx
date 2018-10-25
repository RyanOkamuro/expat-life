import React, { Component } from 'react';
import WorkAbroadPosts from './WorkAbroadPosts';
import './WorkAbroad.css'

class WorkAbroad extends Component {
    render() {
        let blogCategory = this.props.blogPosts.filter((post) => {
            return post.category === 'Work_Abroad';
        })
        const blogPosts = blogCategory.map((blogPost, index) => (
            <div className='blog-content' key={index}>
                <WorkAbroadPosts blogPost={blogPost} />
            </div>
        ))
        return (
            <div>
                <section className='banner-container'>
                    <img src='assets/Beijing/Study_Abroad_UIBE_Banner.jpg' className='banner' alt='banner'></img>
                </section>
                <section className='article-container'>
                    <h1 className='article-heading'>Work Abroad Articles</h1>
                    <div className='blogging-articles'>
                        {blogPosts}
                    </div>
                </section>
            </div>
        );
    }
}

export default WorkAbroad;