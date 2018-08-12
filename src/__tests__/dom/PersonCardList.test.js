import React from 'react';
import { shallow } from 'enzyme';
import PersonCardList from '../../components/PersonCardList';

const sampleDataList = [
    {id: 1, first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},
    {id: 2, first_name: "Janet", last_name: "Weaver", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},
    {id: 3, first_name: "Emma", last_name: "Wong", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"}
];

const emptyDataList = [];

describe('PersonCardList should match the snapshot with conditions:', () => {
    it('has no props', () => {
        const component = shallow(<PersonCardList />);
        expect(component).toMatchSnapshot();
    });

    it('has dataList props is at least one length', () => {
        const component = shallow(<PersonCardList dataList={sampleDataList} />);
        expect(component).toMatchSnapshot();
    });

    it('has dataList props is zero length', () => {
        const component = shallow(<PersonCardList dataList={emptyDataList} />);
        expect(component).toMatchSnapshot();
    });
});