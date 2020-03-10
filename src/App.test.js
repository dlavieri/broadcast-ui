import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  const wrapper = shallow(<App {...props}/>);
  return wrapper;
}

test('renders without crashing', () => {
  let wrapper = setup();
  let app = wrapper.find({"className": "App"});
  expect(app.length).toBe(1);
});
