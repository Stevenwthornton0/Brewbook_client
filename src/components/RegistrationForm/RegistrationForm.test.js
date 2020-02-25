import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import RegistrationForm from './RegistrationForm';

Enzyme.configure({ adapter: new Adapter() })

describe(`RegistrationForm smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<RegistrationForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})