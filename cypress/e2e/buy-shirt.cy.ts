describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/");
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    cy.get(
        "#center_column a.button.ajax_add_to_cart_button.btn.btn-default",
    ).click();
    cy.get("[style*='display: block;'] .button-container > a").click();
    cy.get(".cart_navigation span").click();

    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");

    cy.get("button#SubmitLogin").click();

    cy.get("button span").contains("Proceed to checkout").click();

    cy.get("input[type='checkbox']").click();

    cy.get("button span").contains("Proceed to checkout").click();

    cy.get("a.bankwire").click();

    cy.get("button span").contains("I confirm my order").click();

    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
