import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import SearchBar from './SearchBar';

Enzyme.configure({ adapter: new Adapter() })

describe(`SearchBar smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<SearchBar />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})