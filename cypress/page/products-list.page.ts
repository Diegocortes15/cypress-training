class ProductsListPage {
  private addToCartBtn: string;
  private proceedToCheckoutBtn: string;

  constructor() {
    this.addToCartBtn = "[title='Add to cart']";
    this.proceedToCheckoutBtn = "a[title='Proceed to checkout']";
  }

  public clickAddToCartBtn(): void {
    cy.get(this.addToCartBtn).click();
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}

export {ProductsListPage};
