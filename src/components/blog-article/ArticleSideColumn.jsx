import React, { Component } from 'react';
import Instagram from './Instagram';
import './ArticleSideColumn.css'

class ArticleSideColumn extends Component {
    render() {
        return (
            <div className='article-side-column-container'>
                <h4 className='instagram-title'>Instagram Feed</h4>
                <Instagram />
            </div>
        );
    }
}

export default ArticleSideColumn;