import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import RegistrationPage from './RegistrationPage';

Enzyme.configure({ adapter: new Adapter() })

describe(`RegistrationPage smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<RegistrationPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})