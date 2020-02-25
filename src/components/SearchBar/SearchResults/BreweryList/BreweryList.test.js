import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import BreweryList from './BreweryList';

Enzyme.configure({ adapter: new Adapter() })

describe(`BreweryList smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = mount(<BreweryList />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})