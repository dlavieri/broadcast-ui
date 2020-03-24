import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import StreamPage from './stream';
import Container from '../../components/container/container'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  const wrapper = shallow(<StreamPage {...props}/>);
  return wrapper;
}

test('renders container without crashing', () => {
  let wrapper = setup();
  let app = wrapper.find(Container);
  expect(app.length).toBe(1);
});