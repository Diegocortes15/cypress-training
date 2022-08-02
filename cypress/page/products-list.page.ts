class ProductsListPage {
  private addToCartBtn: string;
  private proceedToCheckoutBtn: string;

  constructor() {
    this.addToCartBtn =
      ".product-container .button-container > a.ajax_add_to_cart_button";
    this.proceedToCheckoutBtn = ".layer_cart_cart a";
  }

  public clickAddToCartBtn(): void {
    cy.get(this.addToCartBtn).click();
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}

export {ProductsListPage};
