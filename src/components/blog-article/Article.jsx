import React, { Component } from 'react';
import ArticleMain from './ArticleMain';

class Article extends Component {
    render() {
        return (
            <div>
                <section className='blog-main-container'>   
                    <ArticleMain blogPostInfo={this.props.location.blogPostInfo}/>
                </section>
            </div>
        );
    }
}

export default Article;