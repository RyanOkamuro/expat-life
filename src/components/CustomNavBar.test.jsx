import React from 'react';
import {shallow} from 'enzyme';

import CustomNavBar from './CustomNavBar';

describe('<CustomNavBar />', () => {
    it('Renders without crashing', () => {
        shallow(<CustomNavBar />);
    });
});