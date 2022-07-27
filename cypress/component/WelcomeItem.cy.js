import WelcomeItem from "../../src/components/WelcomeItem.vue";

describe("WelcomeItem", () => {
  beforeEach(() => {
    cy.mount(WelcomeItem);
  });
  it("renders properly", () => {
    cy.get("div").should("exist").and("have.class", "item");
  });
});
