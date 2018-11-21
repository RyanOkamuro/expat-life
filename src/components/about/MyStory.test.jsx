import React from 'react';
import {shallow} from 'enzyme';

import MyStory from './MyStory';

describe('<MyStory />', () => {
    it('Renders without crashing', () => {
        shallow(<MyStory />);
    });
});