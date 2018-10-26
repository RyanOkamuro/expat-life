import React, { Component } from 'react';
import './ArticleMain.css'

class ArticleMain extends Component {
    render() {
        return (
            <div className='blog-main-article'>
                <h2 className='blog-header'>{this.props.blogPostInfo.title}</h2>
                <img src={this.props.blogPostInfo.image} className='blog-post-image' alt='blog-post-img'></img>
                <p className='blog-article-content'>{this.props.blogPostInfo.blogEntry}</p>
            </div>
        );
    }
}

export default ArticleMain;