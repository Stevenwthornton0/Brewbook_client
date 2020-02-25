import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import BreweryPage from './BreweryPage';

Enzyme.configure({ adapter: new Adapter() })

describe(`BreweryPage smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = mount(<BreweryPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})