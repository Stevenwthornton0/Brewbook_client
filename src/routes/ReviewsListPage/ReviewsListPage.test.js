import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import ReviewsListPage from './ReviewsListPage';

Enzyme.configure({ adapter: new Adapter() })

describe(`ReviewsListPage smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<ReviewsListPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})