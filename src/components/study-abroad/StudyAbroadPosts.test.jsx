import React from 'react';
import {shallow} from 'enzyme';

import StudyAbroadPosts from './StudyAbroadPosts';

describe('<StudyAbroadPosts />', () => {
    const blogPost = {id: '123456789'}
    it('Renders without crashing', () => {
        shallow(<StudyAbroadPosts blogPost={blogPost} />);
    });
});