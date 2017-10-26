import React from 'react';
import ZipCodeForm from './ZipCodeForm';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const form = shallow(<ZipCodeForm />);
  expect(form.find('input[type="text"]').text()).toEqual('');
});

it('#isAllNumbers will be correct when all are ints', () => {
  const form = shallow(<ZipCodeForm />);
  let result = form.instance().isAllNumbers('12345');
  expect(result).toBeTruthy;
});

it('#isAllNumbers will return false if not ints', () => {
  const form = shallow(<ZipCodeForm />);
  let result = form.instance().isAllNumbers('abcs123');
  expect(result).toBeFalsey;
});

it('#isValidZipCode will be valid if isAllNumbers and is 5 digits', () => {
  const form = shallow(<ZipCodeForm />);
  let result = form.instance().isAllNumbers('01234');
  expect(result).toBeTruthy;
});

it('will have disabled button when empty', () => {
  const form = shallow(<ZipCodeForm />);
  expect(form.state().isValid).toBeFalsey;
});

it('will enable button when you input valid value', () => {
  const form = shallow(<ZipCodeForm />);
  let zipInput = form.find('input[type="text"]');
  zipInput.value = '06605';
  expect(form.state().isValid).toBeTruthy;
});

it('will enable button depending on state', () => {
  const form = shallow(<ZipCodeForm />);
  let zipInput = form.find('input[type="text"]');
  zipInput.value = '06605';
  expect(form.find('input[type="submit"]').enabled).toBeTruthy
});
