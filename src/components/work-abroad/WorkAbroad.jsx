import React, { Component } from 'react';
import WorkAbroadPosts from './WorkAbroadPosts';
import BannerCarousel from '../banner/BannerCarousel';
import {getAllBlogEntries} from '../../actions/blogActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './WorkAbroad.css'

class WorkAbroad extends Component {
    componentDidMount() {
        this.props.dispatch(getAllBlogEntries());
    }
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
                <BannerCarousel />
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

WorkAbroad.defaultProps = {
    title: 'WorkAbroad'
};

const mapStateToProps = state => ({
    blogPosts: state.blog.allBloggingEntries
});

export default withRouter(connect(mapStateToProps)(WorkAbroad));