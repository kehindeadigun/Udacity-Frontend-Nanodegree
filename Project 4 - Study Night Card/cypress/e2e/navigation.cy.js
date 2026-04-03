describe("Link Clicking Functionality", () => {
    it("Allows user navigate to card set page", () => {
        cy.visit("http://localhost:1234/");
        cy.get('[id="cardSetPage"]').click();
    });

    it("Allows user navigate to about page", () => {
        cy.visit("http://localhost:1234/");
        cy.get('[id="aboutPage"]').click();
    });

    it("Allows user navigate to homepage", () => {
        cy.visit("http://localhost:1234/aboutPage");
        cy.get('[id="homePage"]').click();
    });
});
