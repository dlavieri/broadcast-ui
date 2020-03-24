import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Post from './post';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  const wrapper = shallow(<Post {...props}/>);
  return wrapper;
}

test('renders post without crashing', () => {
  let wrapper = setup();
  let app = wrapper.find({"className": "post"});
  expect(app.length).toBe(1);
});