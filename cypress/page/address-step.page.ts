/* eslint-disable require-jsdoc */
class AddressStepPage {
  private proceedToCheckoutBtn: string;

  constructor() {
    this.proceedToCheckoutBtn = ".cart_navigation button";
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}

export default new AddressStepPage();
