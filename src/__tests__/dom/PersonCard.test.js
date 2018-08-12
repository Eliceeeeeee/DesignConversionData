import React from 'react';
import { shallow } from 'enzyme';
import PersonCard from '../../components/PersonCard';

describe('PersonCard should match the snapshot with conditions:', () => {
    it('has no props', () => {
        const component = shallow(<PersonCard />);
        expect(component).toMatchSnapshot();
    });

    it('has id props', () => {
        const component = shallow(<PersonCard id= "1" />);
        expect(component).toMatchSnapshot();
    });

    it('has imageUrl props', () => {
        const component = shallow(<PersonCard imageUrl="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" />);
        expect(component).toMatchSnapshot();
    });

    it('has firstName props', () => {
        const component = shallow(<PersonCard firstName="George" />);
        expect(component).toMatchSnapshot();
    });

    it('has lastName props', () => {
        const component = shallow(<PersonCard lastName="Bluth" />);
        expect(component).toMatchSnapshot();
    });
});
