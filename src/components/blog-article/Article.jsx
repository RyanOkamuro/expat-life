import React, { Component } from 'react';
import ArticleMain from './ArticleMain';
import ArticleSideColumn from './ArticleSideColumn';
import './Article.css';

class Article extends Component {
    render() {
        return (
            <div>
                <section className='banner-container'>
                    <img src='../assets/Beijing/Paper_Factory_Banner.jpg' className='banner' alt='banner'></img>
                </section>
                <section className='blog-main-container'>   
                    <ArticleMain blogPostInfo={this.props.location.blogPostInfo}/>
                    <ArticleSideColumn/>
                </section>
            </div>
        );
    }
}

export default Article;