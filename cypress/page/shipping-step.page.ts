/* eslint-disable require-jsdoc */
class ShippingStepPage {
  private proceedToCheckoutBtn: string;
  private checkBox: string;

  constructor() {
    this.checkBox = "[type='checkbox']";
    this.proceedToCheckoutBtn = ".cart_navigation button";
  }

  public clickCheckBox(): void {
    cy.get(this.checkBox).click();
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}

export default new ShippingStepPage();
