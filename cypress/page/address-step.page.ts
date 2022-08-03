class AddressStepPage {
  private proceedToCheckoutBtn: string;

  constructor() {
    this.proceedToCheckoutBtn = ".cart_navigation button[type='submit']";
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}

export {AddressStepPage};
