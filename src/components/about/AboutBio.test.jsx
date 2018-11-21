import React from 'react';
import {shallow} from 'enzyme';

import AboutBio from './AboutBio';

describe('<AboutBio />', () => {
    it('Renders without crashing', () => {
        shallow(<AboutBio />);
    });
});