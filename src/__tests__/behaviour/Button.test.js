import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

it('renders without crashing', () => {
    shallow(<Button />);
});

describe('On click event:', () => {
    it('should call the onClick props function', () => {
        const onClickMock = jest.fn();
		const button = shallow(<Button onClick={onClickMock}/>);

        button.simulate('click');
        expect(onClickMock).toBeCalled();
    });
});