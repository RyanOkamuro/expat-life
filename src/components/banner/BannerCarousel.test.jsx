import React from 'react';
import {shallow} from 'enzyme';

import BannerCarousel from './BannerCarousel';

describe('<BannerCarousel />', () => {
    it('Renders without crashing', () => {
        shallow(<BannerCarousel />);
    });
});