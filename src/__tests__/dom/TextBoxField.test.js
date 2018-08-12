import React from 'react';
import { shallow } from 'enzyme';
import TextBoxField from '../../components/TextBoxField';

describe('TextBoxField should match the snapshot with conditions:', () => {
    it('has no props', () => {
        const component = shallow(<TextBoxField />);
        expect(component).toMatchSnapshot();
    });

    it('has id props', () => {
        const component = shallow(<TextBoxField id= "input-paging-no" />);
        expect(component).toMatchSnapshot();
    });

    it('has minLength props', () => {
        const component = shallow(<TextBoxField minLength="1" />);
        expect(component).toMatchSnapshot();
    });

    it('has maxLength props', () => {
        const component = shallow(<TextBoxField maxLength="2" />);
        expect(component).toMatchSnapshot();
    });

    it('has className props', () => {
        const component = shallow(<TextBoxField className="input-text-field" />);
        expect(component).toMatchSnapshot();
    });

    it('has value props and when receive new props', () => {
        let newValue = '1';
        const component = shallow(<TextBoxField value={newValue} />);
        expect(component).toMatchSnapshot();

        newValue = '3';
        component.setProps({ newValue });
        expect(component).toMatchSnapshot();
    });

    it('has value props', () => {
        const component = shallow(<TextBoxField value="3" />);
        expect(component).toMatchSnapshot();
    });
});
