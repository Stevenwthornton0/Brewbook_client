import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import ReviewForm from './ReviewForm';

Enzyme.configure({ adapter: new Adapter() })

describe(`ReviewForm smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<ReviewForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})