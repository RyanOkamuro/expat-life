import React, { Component } from 'react';
import StudyAbroadPosts from './StudyAbroadPosts';
import BannerCarousel from '../banner/BannerCarousel';
import {getAllBlogEntries} from '../../actions/blogActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './StudyAbroad.css';

class StudyAbroad extends Component {
    componentDidMount() {
        this.props.dispatch(getAllBlogEntries());
    }
    render() {
        let blogCategory = this.props.blogPosts.filter((post) => {
            return post.category === 'Study_Abroad';
        })
        const blogPosts = blogCategory.map((blogPost, index) => (
            <div className='blog-content' key={index}>
                <StudyAbroadPosts blogPost={blogPost} />
            </div>
        ))
        return (
            <div>
                <BannerCarousel />
                <section className='article-container'>
                    <h1 className='article-heading'>Study Abroad Articles</h1>
                    <div className='blogging-articles'>
                        {blogPosts}
                    </div>
                </section>
            </div>
        );
    }
}

StudyAbroad.defaultProps = {
    title: 'StudyAbroad'
};

const mapStateToProps = state => ({
    blogPosts: state.blog.allBloggingEntries
});

export default withRouter(connect(mapStateToProps)(StudyAbroad));