import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import PaginationPage from './PaginationPage';

Enzyme.configure({ adapter: new Adapter() })

describe(`PaginationPage smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = mount(<PaginationPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})