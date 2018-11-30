import React, { Component } from 'react';
import Instagram from './Instagram';
import './ArticleSideColumn.css'

class ArticleSideColumn extends Component {
    render() {
        return (
            <div className='article-side-column-container'>
                <h4 className='instagram-title'>Instagram Feed</h4>
                <h3 className='instagram-follow-me'><a href='https://www.instagram.com/gogoryano/'>Follow me: @gogoryano</a></h3>
                <Instagram />
            </div>
        );
    }
}

export default ArticleSideColumn;