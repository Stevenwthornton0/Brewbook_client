import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import LoginPage from './LoginPage';

Enzyme.configure({ adapter: new Adapter() })

describe(`LoginPage smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<LoginPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})