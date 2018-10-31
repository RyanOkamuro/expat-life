import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getAllBlogEntries} from '../../actions/blogActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './BloggingLanding.css'

class BloggingLanding extends Component {
    componentDidMount() {
        this.props.dispatch(getAllBlogEntries());
    }
    render() {
        let blogArticle = {
            pathname: '/featured/' + this.props.blogPost.id,
            blogPostInfo: this.props.blogPost
        }
        return (
            <div className='landing-featured-posts'>
                <Link to={blogArticle}><img className='landing-featured-images' alt='landing-featured-img' src={this.props.blogPost.image}></img></Link>
                <p className='landing-featured-description'>{this.props.blogPost.caption}</p>
            </div>
        );
    }
}

BloggingLanding.defaultProps = {
    title: 'BloggingLanding'
};

const mapStateToProps = state => console.log(state)
(
    
    {
    
    blogPost: state.blogEntry.allBloggingEntries
});

export default withRouter(connect(mapStateToProps)(BloggingLanding));