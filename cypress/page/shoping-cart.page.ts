class ShoppingCartPage {
  private proceedToCheckoutBtn: string;

  constructor() {
    this.proceedToCheckoutBtn = ".cart_navigation span";
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}

export default new ShoppingCartPage();
