import React from 'react';
import {shallow} from 'enzyme';

import ArticleMain from './ArticleMain';

describe('<ArticleMain />', () => {
    const blogPosts = {title: 'Travel Abroad'}
    it('Renders without crashing', () => {
        shallow(<ArticleMain blogPosts={blogPosts} />);
    });
});