import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import BreweryItem from './BreweryItem';

Enzyme.configure({ adapter: new Adapter() })

describe(`BreweryItem smoke test`, () => {
    it('BreweryItem renders without crashing', () => {
        const brewery = {
            id: 6780,
            name: "Jester King Brewery",
            brewery_type: "micro",
            street: "13187 Fitzhugh Rd",
            city: "Austin",
            state: "Texas",
            postal_code: "78736-6510",
            country: "United States",
            longitude: "-98.0824692",
            latitude: "30.2547264",
            phone: "5125375100",
            website_url: "http://www.jesterkingbrewery.com",
            updated_at: "2018-08-24T16:21:26.875Z"
            }
        const wrapper = shallow(<BreweryItem brewery={brewery}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})