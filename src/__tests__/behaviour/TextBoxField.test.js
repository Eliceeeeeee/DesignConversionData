import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TextBoxField from '../../components/TextBoxField';

it('renders without crashing', () => {
    shallow(<TextBoxField />);
});

describe('On change event:', () => {
    it('should call the onClick props function', () => {
        const onChangeMock = jest.fn();
		const textBox = shallow(<TextBoxField onChange={onChangeMock}/>);

        textBox.simulate('change');
        expect(onChangeMock).toBeCalled();
    });
});

