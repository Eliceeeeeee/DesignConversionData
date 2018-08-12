import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button should match the snapshot with conditions:', () => {
    it('has no props', () => {
        const component = shallow(<Button />);
        expect(component).toMatchSnapshot();
    });

    it('has buttonClassName props', () => {
        const component = shallow(<Button buttonClassName="main-btn" />);
        expect(component).toMatchSnapshot();
    });

    it('has textValue props', () => {
        const component = shallow(<Button textValue="+ Create new" />);
        expect(component).toMatchSnapshot();
    });
});
