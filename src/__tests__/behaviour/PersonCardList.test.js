import React from 'react';
import { shallow } from 'enzyme';
import PersonCardList from '../../components/PersonCardList';

it('renders without crashing', () => {
    shallow(<PersonCardList />);
});
