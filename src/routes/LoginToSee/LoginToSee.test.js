import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import LoginToSee from './LoginToSee';

Enzyme.configure({ adapter: new Adapter() })

describe(`LoginToSee smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<LoginToSee />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})