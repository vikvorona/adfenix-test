describe('main', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('#yearsOfExperience').type('5');
    cy.get('#occupation').click();
    cy.get('[role="option"]').contains('Programmer').click();
    cy.get('#city').click();
    cy.get('[role="option"]').contains('Gothenburg').click();
    cy.get('#incomeYear').click();
    cy.get('[role="option"]').contains('2020').click();

    cy.get('button').contains('Calculate').click();

    cy.get('p').contains('Your salary after tax: 28 080 kr').should('exist');
  });
});
