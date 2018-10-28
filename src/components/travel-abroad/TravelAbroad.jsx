import React, { Component } from 'react';
import TravelAbroadPosts from './TravelAbroadPosts';
import './TravelAbroad.css'

class TravelAbroad extends Component {
    render() {
        let blogCategory = this.props.blogPosts.filter((post) => {
            return post.category === 'Travel_Abroad';
        })
        const blogPosts = blogCategory.map((blogPost, index) => (
            <div className='blog-content' key={index}>
                <TravelAbroadPosts blogPost={blogPost} />
            </div>
        ))
        return (
            <div>
                <section className='banner-container'>
                    <img src='../assets/Athens/Parthenon_Banner.jpg' className='banner' alt='banner'></img>
                </section>
                <section className='article-container'>
                    <h1 className='article-heading'>Travel Abroad Articles</h1>
                    <div className='blogging-articles'>
                        {blogPosts}
                    </div>
                </section>
            </div>
        );
    }
}

export default TravelAbroad;