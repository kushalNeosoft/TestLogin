/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Validator from '../src/helpers/Validator';

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('Test Validator', () => {
  const validEmail = 'example@gmail.com';
  const invalidEmail = 'examplegmail.com';
  test('Email: Valid Email', () => {
    const result = Validator.emailValidator(validEmail);
    expect(result).toEqual(true);
  });
  test('Email: Invalid Email', () => {
    const result = Validator.emailValidator(invalidEmail);
    expect(result).toEqual(false);
  });

  const validPasword = 'Example4#';
  const invalidPassword = 'example4#';
  test('Password: Valid Email', () => {
    const result = Validator.passwordValidator(validPasword);
    expect(result).toEqual(true);
  });
  test('Password: Invalid Email', () => {
    const result = Validator.passwordValidator(invalidPassword);
    expect(result).toEqual(false);
  });
});
