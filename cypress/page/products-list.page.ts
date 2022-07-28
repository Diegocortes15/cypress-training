class ProductListPage {
  private addToCartBtn: string;
  private proceedToCheckoutBtn: string;

  constructor() {
    this.addToCartBtn =
      "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    this.proceedToCheckoutBtn =
      "[style*='display: block;'] .button-container > a";
  }

  public clickAddToCartBtn(): void {
    cy.get(this.addToCartBtn).click();
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}

export default new ProductListPage();
