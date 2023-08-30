describe("basic site content and navigation", () => {
  it("loads home page", () => {
    cy.visit("/");

    cy.get("h1").contains("full-stack sunny");
    cy.get("p").contains("Hello there");

    cy.get("body nav").contains("about").click();
    cy.get("body nav").contains("links").click();
  });

  it("loads links page", () => {
    cy.visit("/links");

    cy.url().should("include", "/links");

    cy.get("body nav").contains("about");
    cy.get("body nav").contains("links");

    cy.get("h1").contains("links");
    cy.get('[data-cy="sns"] li').contains("LinkedIn");
    cy.get('[data-cy="sns"] li').contains("GitHub");
    cy.get('[data-cy="sns"] li').contains("mastodon");
  });

  it("navigates to links page from home", () => {
    cy.visit("/");
    cy.get("body nav").contains("links").click();

    cy.url().should("include", "/links");
    cy.get("h1").contains("links");
    cy.get('[data-cy="sns"] li').contains("LinkedIn");
    cy.get('[data-cy="sns"] li').contains("GitHub");
    cy.get('[data-cy="sns"] li').contains("mastodon");
  });

  it("navigates to home page from links", () => {
    cy.visit("/links");
    cy.get("body nav").contains("about").click();

    cy.url().should("include", "/");
    cy.get("h1").contains("full-stack sunny");
    cy.get("p").contains("Hello there");
  });

  it("navigates to links and back from home", () => {
    cy.visit("/");
    cy.get("h1").contains("full-stack sunny");

    cy.get("body nav").contains("links").click();
    cy.url().should("include", "/links");
    cy.get("h1").contains("links");

    cy.get("body nav").contains("about").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("full-stack sunny");
  });
});
