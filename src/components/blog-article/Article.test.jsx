import React from 'react';
import {shallow} from 'enzyme';

import Article from './Article';

describe('<Article />', () => {
    it('Renders without crashing', () => {
        shallow(<Article />);
    });
});