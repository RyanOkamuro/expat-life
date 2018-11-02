import React from 'react';
import {shallow} from 'enzyme';

import BloggingLanding from './BloggingLanding';

describe('<BloggingLanding />', () => {
    const blogPost = {id: '123456789'}
    it('Renders without crashing', () => {
        shallow(<BloggingLanding blogPost={blogPost} />);
    });
});