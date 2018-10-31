import React, { Component } from 'react';
import ArticleMain from './ArticleMain';
import ArticleSideColumn from './ArticleSideColumn';
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
                    <section className='banner-container'>
                        <img src='../assets/AlmafiCoast/Positano.jpg' className='banner' alt='banner'></img>
                    </section>
                    <section className='blog-main-container'>   
                        <ArticleMain blogPosts={this.props.location.blogPosts}/>
                        <ArticleSideColumn/>
                    </section>
                </div>
            );
        } else {
            console.log(this.props.blogPosts);
            const selectedArticle = this.props.blogPosts.find(post => post.id === this.props.match.params.articleid)
            if(selectedArticle) {
                return (
                    <div>
                        <section className='banner-container'>
                            <img src='../assets/AlmafiCoast/Positano.jpg' className='banner' alt='banner'></img>
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
    blogPosts: state.blog.allBloggingEntries
});

export default withRouter(connect(mapStateToProps)(Article));