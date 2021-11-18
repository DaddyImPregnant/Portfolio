import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from '../pages/index.js';

test('renders github link', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/DaddyImPregnant/i)[0];
  expect(linkElement).toBeInTheDocument();
});
