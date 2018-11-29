import React, { Component } from 'react';
import Instafeed from 'react-instafeed'

import './Instagram.css'

class Instagram extends Component {
    render() {
        let instafeedTarget = 'instafeed';
        return (
            <div id={instafeedTarget}>
                <Instafeed
                limit='5'
                ref='instafeed'
                resolution='thumbnail'
                sortBy='most-recent'
                target={instafeedTarget}
                template='
                    <div class="instagram-gallery">
                        <a href="{{link}}" title="{{caption}}" target="_blank">
                            <img src="{{image}}" alt="{{caption}}" class="instagram-image"/>
                        </a>
                    </div>'
                userId={`${process.env.REACT_APP_INSTAGRAM_USER_ID}`}
                accessToken={`${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`}
                />
            </div>
        );
    }
}

export default Instagram;
