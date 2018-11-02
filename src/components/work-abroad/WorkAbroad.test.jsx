import React from 'react';
import {shallow} from 'enzyme';

import WorkAbroad from './WorkAbroad';

describe('<WorkAbroad />', () => {
    it('Renders without crashing', () => {
        shallow(<WorkAbroad />);
    });
});