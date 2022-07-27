import TheWelcome from "../../src/components/TheWelcome.vue";

describe("TheWelcome", () => {
  beforeEach(() => {
    cy.mount(TheWelcome);
  });
  it("renders properly", () => {
    cy.contains("Cypress Component Testing");
  });

  it("renders a welcome item with header Documentation", () => {
    cy.contains("h3", "Documentation");
  });

  it("renders a welcome item with header Tooling", () => {
    cy.contains("h3", "Tooling");
  });

  it("renders a welcome item with header Ecosystem", () => {
    cy.contains("h3", "Ecosystem");
  });

  it("renders a welcome item with header Community", () => {
    cy.contains("h3", "Community");
  });

  it("renders a welcome item with header Support Vue", () => {
    cy.contains("h3", "Support Vue");
  });
});
