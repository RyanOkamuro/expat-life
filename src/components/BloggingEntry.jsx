import React, { Component } from 'react';
import './BloggingEntry.css'

class BloggingEntry extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.blogPost.title}</h2>
                <p>{this.props.blogPost.blogEntry}</p>
            </div>
        );
    }
}

export default BloggingEntry;