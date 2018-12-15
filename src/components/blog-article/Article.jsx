import React, { Component } from 'react';
import ArticleMain from './ArticleMain';
import ArticleSideColumn from './ArticleSideColumn';
import BannerCarousel from '../banner/BannerCarousel';
import {getAllBlogEntries} from '../../actions/blogActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Article.css';

class Article extends Component {
    componentDidMount() {
        this.props.dispatch(getAllBlogEntries());
    }
    render() {
        if (this.props.location.blogPosts) {
            return (
                <div>
                    <BannerCarousel />
                    <section className='blog-main-container'>   
                        <ArticleMain blogPosts={this.props.location.blogPosts}/>
                        <ArticleSideColumn/>
                    </section>
                </div>
            );
        } else {
            const selectedArticle = this.props.blogPosts.find(post => post.id === this.props.match.params.articleid)
            if(selectedArticle) {
                return (
                    <div>
                        <section className='banner-container'>
                            <img src='https://github.com/RyanOkamuro/expat-life/blob/master/public/assets/AlmafiCoast/Positano.JPG?raw=true' className='banner' alt='banner'></img>
                        </section>
                        <section className='blog-main-container'>   
                            <ArticleMain blogPosts={selectedArticle}/>
                            <ArticleSideColumn/>
                        </section>
                    </div>
                );
            } else {
                return(null);
            }
        }
    }
}

Article.defaultProps = {
    title: 'Article'
};

const mapStateToProps = state => ({
    blogPosts: state.allBloggingEntries
});

export default withRouter(connect(mapStateToProps)(Article));