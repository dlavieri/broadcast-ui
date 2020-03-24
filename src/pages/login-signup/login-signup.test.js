import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import LoginPage from './login';
import SignupPage from './signup';
import Container from '../../components/container/container'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, Page) => {
  const wrapper = shallow(<Page {...props}/>);
  return wrapper;
}

test('signup page renders container without crashing', () => {
  let wrapper = setup({}, SignupPage);
  let app = wrapper.find(Container);
  console.log(wrapper.debug())
  expect(app.length).toBe(1);
});

test('login page renders container without crashing', () => {
    let wrapper = setup({}, LoginPage);
    let app = wrapper.find(Container);
    console.log(wrapper.debug())
    expect(app.length).toBe(1);
  });