import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Header from './header';

Enzyme.configure({ adapter: new Adapter() })

describe(`header smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<Header />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})