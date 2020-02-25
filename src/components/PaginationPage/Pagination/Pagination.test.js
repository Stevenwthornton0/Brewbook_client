import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Pagination from './Pagination';

Enzyme.configure({ adapter: new Adapter() })

describe(`Pagination smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<Pagination />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})