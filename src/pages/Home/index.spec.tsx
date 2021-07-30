import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

test('should have a minimum revenue input', () => {
  render(<Home />);
  const input = screen.getByRole('textbox', {
    name: /faturamento mínimo/i,
  });

  expect(input).toBeInTheDocument();
});

test('should have a search input', () => {
  render(<Home />);
  const input = screen.getByRole('textbox', {
    name: /pesquisa/i,
  });

  expect(input).toBeInTheDocument();
});
