import React from 'react';
import { City, IncomeYear, Occupation } from '../../../types';
import CalculatorForm from './CalculatorForm';

describe('<CalculatorForm>', () => {
  let onSubmit: () => void;

  beforeEach(() => {
    onSubmit = cy.spy();
    cy.mount(<CalculatorForm onSubmit={onSubmit} />);
    cy.get('#yearsOfExperience-helper-text').should('not.exist');
    cy.get('#occupation-helper-text').should('not.exist');
    cy.get('#city-helper-text').should('not.exist');
    cy.get('#incomeYear-helper-text').should('not.exist');
  });

  describe('Years of Experience', () => {
    it('shows error for negative number', () => {
      cy.get('#yearsOfExperience').type('-1').blur();
      cy.get('#yearsOfExperience-helper-text').should('have.text', 'Please enter a positive number');
    });
    it('shows error if not entered after submit', () => {
      cy.get('button').contains('Calculate').click();
      cy.get('#yearsOfExperience-helper-text').should('have.text', 'Please enter your experience');
    });
    it('shows error if not entered after blur', () => {
      cy.get('#yearsOfExperience').focus().blur();
      cy.get('#yearsOfExperience-helper-text').should('have.text', 'Please enter your experience');
    });
    it('should not allow chars', () => {
      cy.get('#yearsOfExperience').type('abc1def');
      cy.get('#yearsOfExperience').should('have.value', '1');
    });
  });

  describe('Occupation', () => {
    it('shows error if not entered after submit', () => {
      cy.get('button').contains('Calculate').click();
      cy.get('#occupation-helper-text').should('have.text', 'Please enter your occupation');
    });
    it('should show 3 options', () => {
      cy.get('#occupation').click();
      cy.get('[role="option"]').should('have.length', 3);
    });
    it('should apply option', () => {
      cy.get('#occupation').click();
      cy.get('[role="option"]').contains('Programmer').click();
      cy.get('#occupation').should('have.text', 'Programmer');
    });
  });

  describe('City', () => {
    it('shows error if not entered after submit', () => {
      cy.get('button').contains('Calculate').click();
      cy.get('#city-helper-text').should('have.text', 'Please enter the city');
    });
    it('should show 2 options', () => {
      cy.get('#city').click();
      cy.get('[role="option"]').should('have.length', 2);
    });
    it('should apply option', () => {
      cy.get('#city').click();
      cy.get('[role="option"]').contains('Stockholm').click();
      cy.get('#city').should('have.text', 'Stockholm');
    });
  });

  describe('Income Year', () => {
    it('shows error if not entered after submit', () => {
      cy.get('button').contains('Calculate').click();
      cy.get('#incomeYear-helper-text').should('have.text', 'Please enter the income year');
    });
    it('should show 2 options', () => {
      cy.get('#incomeYear').click();
      cy.get('[role="option"]').should('have.length', 2);
    });
    it('should apply option', () => {
      cy.get('#incomeYear').click();
      cy.get('[role="option"]').contains('2020').click();
      cy.get('#incomeYear').should('have.text', '2020');
    });
  });

  it('should not submit', () => {
    cy.get('button')
      .contains('Calculate')
      .click()
      .then(() => {
        expect(onSubmit).to.not.be.called;
      });
  });

  it('should submit', () => {
    cy.get('#yearsOfExperience').type('1');
    cy.get('#occupation').click().get('[role="option"]').contains('Teacher').click();
    cy.get('#city').click().get('[role="option"]').contains('Gothenburg').click();
    cy.get('#incomeYear').click().get('[role="option"]').contains('2019').click();
    cy.get('button')
      .contains('Calculate')
      .click()
      .then(() => {
        expect(onSubmit).to.be.calledOnce;
        expect(onSubmit).to.be.calledWith({
          yearsOfExperience: 1,
          occupation: Occupation.TEACHER,
          city: City.GOT,
          incomeYear: IncomeYear.XIX,
        });
      });
  });
});
