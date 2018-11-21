import React from 'react';
import {shallow} from 'enzyme';

import TravelAbroad from './TravelAbroad';

describe('<TravelAbroad />', () => {
    it('Renders without crashing', () => {
        shallow(<TravelAbroad />);
    });
});