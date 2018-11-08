import React, { Component } from 'react';
import Moment from 'react-moment';
import './ArticleMain.css'

class ArticleMain extends Component {
    render() {
        let BlogArticle = this.props.blogPosts.blogEntry
        return (
            <div className='blog-main-article'>
                <h2 className='blog-header'>{this.props.blogPosts.title}</h2>
                <h3 className='date-created'>Posted: <Moment format='MMMM, DD YYYY'>{this.props.blogPosts.createdAt}</Moment></h3>
                <img src={this.props.blogPosts.image} className='blog-post-image' alt='blog-post-img'></img>
                {BlogArticle.split('\n').map((paragraph, index) => {
                    return (<p className='blog-article-content' key={index}>{paragraph}</p>)
                })}
            </div>
        );
    }
}

export default ArticleMain;