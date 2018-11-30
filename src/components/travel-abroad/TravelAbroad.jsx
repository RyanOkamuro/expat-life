import React, { Component } from 'react';
import TravelAbroadPosts from './TravelAbroadPosts';
import BannerCarousel from '../banner/BannerCarousel';
import {getAllBlogEntries} from '../../actions/blogActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './TravelAbroad.css'

class TravelAbroad extends Component {
    componentDidMount() {
        this.props.dispatch(getAllBlogEntries());
    }
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
                <BannerCarousel />
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

TravelAbroad.defaultProps = {
    title: 'TravelAbroad'
};

const mapStateToProps = state => ({
    blogPosts: state.blog.allBloggingEntries
});

export default withRouter(connect(mapStateToProps)(TravelAbroad));