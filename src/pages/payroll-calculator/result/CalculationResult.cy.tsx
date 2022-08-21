import React from 'react';
import CalculationResult from './CalculationResult';

describe('<CalculationResult>', () => {
  it('shows 400', () => {
    cy.mount(<CalculationResult salary={400} />);
    cy.contains('Your salary after tax: 400 kr');
  });

  it('formats 30000', () => {
    cy.mount(<CalculationResult salary={30000} />);
    cy.contains('Your salary after tax: 30 000 kr');
  });

  it('formats 30000', () => {
    cy.mount(<CalculationResult salary={2000000} />);
    cy.contains('Your salary after tax: 2 000 000 kr');
  });
});
