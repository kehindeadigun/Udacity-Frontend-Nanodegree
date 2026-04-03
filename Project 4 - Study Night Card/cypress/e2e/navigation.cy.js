describe("Link Clicking Functionality", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234/");
    });

    it("Allows user navigate to card set page", () => {
        cy.get('[id="cardSetPage"]').click();
    });

    it("Allows user navigate to about page", () => {
        cy.get('[id="aboutPage"]').click();
    });

    it("Allows user navigate to homepage", () => {
        cy.visit("http://localhost:1234/aboutPage");
        cy.get('[id="homePage"]').click();
    });
});
