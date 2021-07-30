import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

test('should have image logo', () => {
  render(<Header />);

  const text = screen.getByText(/Desempenho das lojas/i);

  expect(text).toBeInTheDocument();
});
