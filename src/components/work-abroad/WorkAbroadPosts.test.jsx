import React from 'react';
import {shallow} from 'enzyme';

import WorkAbroadPosts from './WorkAbroadPosts';

describe('<WorkAbroadPosts />', () => {
    const blogPost = {id: '123456789'}
    it('Renders without crashing', () => {
        shallow(<WorkAbroadPosts blogPost={blogPost} />);
    });
});