import React from 'react';
import { shallow } from 'enzyme';
import PersonCard from '../../components/PersonCard';

it('renders without crashing', () => {
    shallow(<PersonCard />);
});