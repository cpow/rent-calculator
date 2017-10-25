import React from 'react';
import ZipCodeForm from './ZipCodeForm';
import {shallow} from 'enzyme';

it('will validate a zip code to 5 numeric chars', () => {

});

it('renders without crashing or something', () => {
  const form = shallow(<ZipCodeForm />);
  expect(form.find('input[type="text"]').text()).toEqual('');
});

it('will try to call a function on submit', () => {
});
