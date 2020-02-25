import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import SearchResults from './SearchResults';

Enzyme.configure({ adapter: new Adapter() })

describe(`SearchResults smoke test`, () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<SearchResults />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})