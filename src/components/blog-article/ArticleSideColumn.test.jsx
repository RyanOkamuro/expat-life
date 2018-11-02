import React from 'react';
import {shallow} from 'enzyme';

import ArticleSideColumn from './ArticleSideColumn';

describe('<ArticleSideColumn />', () => {
    it('Renders without crashing', () => {
        shallow(<ArticleSideColumn />);
    });
});