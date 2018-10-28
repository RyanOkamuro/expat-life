import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ArticleSideColumn.css'

class ArticleSideColumn extends Component {
    render() {
        return (
            <div className='article-side-column-container'>
                <h3>Follow Me</h3>
                <a href='https://www.instagram.com/gogoryano/'><img src='assets/Logo/instagram' className='instagramLogo' alt='instagramLogo'></img></a>
            </div>
        );
    }
}

export default ArticleSideColumn;