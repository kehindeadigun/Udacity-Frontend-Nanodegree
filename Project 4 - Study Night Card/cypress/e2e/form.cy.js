describe("Create Set Form Functionality", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234/");
        cy.get('[id="cardSetPage"]').click();
        cy.get('[data-cy="toggle_form"]').click();
    });

    it("Set Form should be visible when clicking button", () => {
        cy.get('[data-cy="set_form"]').should("be.visible");
    });

    it("Set Form should submit valid input", () => {
        cy.get('[id="titleInput"]').type("Cypress test One");
        cy.get('[data-cy="set_form"]').submit();
    });
});

describe("Add Card Form Functionality", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234/");
        cy.get('[id="cardSetPage"]').click();
        cy.get('[data-cy="toggle_form"]').click();
    });

    it("Card exists after valid form creation", () => {
        cy.get('[id="titleInput"]').type("Cypress test Two");
        cy.get('[data-cy="set_form"]').submit();
        cy.get('[data-cy="5"]').should("be.visible");
    });

    it("Set Form should reject empty string input", () => {
        cy.get('[id="titleInput"]').clear();
        cy.get('[data-cy="set_form"]').submit();
        cy.get('[data-cy="5"]').should("not.exist");
        cy.get('[data-cy="set_form"]').find(".error").should("be.visible");
        cy.get('[data-cy="set_form"]')
            .find(".error")
            .should("have.text", "TITLE CANNOT BE EMPTY");
    });
});
