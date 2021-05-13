import { createYield } from "typescript";


describe("Bug Tracker", () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    });

    it("Should display the title", () => {
        cy.get('h1')
            .should('contain', 'Bug Tracker');
    })
    it("should display 5 bugs", () => {
        cy.get('li')
            .should('have.length', 5)
    })
    it('should display when a new bug is added', () => {
        cy.get('.edit > input[type="text"]')
            .type("Application is very slow");
        cy.get('.edit > input[value="Add New"]')
            .click();
        cy.get('li')
            .should('have.length', 6)
    })
})