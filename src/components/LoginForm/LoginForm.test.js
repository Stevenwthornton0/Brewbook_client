import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import LoginForm from './LoginForm';

Enzyme.configure({ adapter: new Adapter() })

describe(`LoginForm smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<LoginForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})