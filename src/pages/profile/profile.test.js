import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ProfilePage from './profile';
import Container from '../../components/container/container'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  const wrapper = shallow(<ProfilePage {...props}/>);
  return wrapper;
}

test('renders container without crashing', () => {
  let wrapper = setup();
  let app = wrapper.find(Container);
  console.log(wrapper.debug())
  expect(app.length).toBe(1);
});