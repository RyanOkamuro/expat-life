import React from 'react';
import {shallow} from 'enzyme';

import TravelAbroadPosts from './TravelAbroadPosts';

describe('<TravelAbroadPosts />', () => {
    const blogPost = {id: '123456789'}
    it('Renders without crashing', () => {
        shallow(<TravelAbroadPosts blogPost={blogPost} />);
    });
});