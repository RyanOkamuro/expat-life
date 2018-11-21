import React from 'react';
import {shallow} from 'enzyme';

import StudyAbroad from './StudyAbroad';

describe('<StudyAbroad />', () => {
    it('Renders without crashing', () => {
        shallow(<StudyAbroad />);
    });
});