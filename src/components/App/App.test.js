import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import Header from '../Header/header';
import ReviewsListPage from '../../routes/ReviewsListPage/ReviewsListPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import LoginToSee from '../../routes/LoginToSee/LoginToSee';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import BreweryPage from '../../routes/BreweryPage/BreweryPage';
import LoginForm from '../LoginForm/LoginForm';
import PaginationPage from '../PaginationPage/PaginationPage';
import Pagination from '../PaginationPage/Pagination/Pagination';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchBar/SearchResults/SearchResults';
import BreweryList from '../SearchBar/SearchResults/BreweryList/BreweryList';
import BreweryItem from '../SearchBar/SearchResults/BreweryList/BreweryItem/BreweryItem';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('All routes', () => {
    it('App renders without crashing', () => {
        const wrapper = shallow(<App />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('Header renders without crashing', () => {
        const wrapper = shallow(<Header />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('ReviewsListPage renders without crashing', () => {
        const wrapper = shallow(<ReviewsListPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('LoginToSee renders without crashing', () => {
        const wrapper = shallow(<LoginToSee />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('RegistrationPage renders without crashing', () => {
        const wrapper = shallow(<RegistrationPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('BreweryPage renders without crashing', () => {
        const wrapper = mount(<BreweryPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('LoginPage renders without crashing', () => {
        const wrapper = shallow(<LoginPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

describe('all components', () => {
    it('LoginForm renders without crashing', () => {
        const wrapper = shallow(<LoginForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('PaginationPage renders without crashing', () => {
        const wrapper = mount(<PaginationPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('Pagination renders without crashing', () => {
        const wrapper = shallow(<Pagination pages={[]}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('RegistrationForm renders without crashing', () => {
        const wrapper = shallow(<RegistrationForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('ReviewForm renders without crashing', () => {
        const wrapper = shallow(<ReviewForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('SearchBar renders without crashing', () => {
        const wrapper = shallow(<SearchBar />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('SearchResults renders without crashing', () => {
        const wrapper = shallow(<SearchResults />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('BreweryList renders without crashing', () => {
        const wrapper = mount(<BreweryList />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

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