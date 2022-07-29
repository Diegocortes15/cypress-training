class ShippingStepPage {
  private proceedToCheckoutBtn: string;
  private acceptTerms: string;

  constructor() {
    this.acceptTerms = "[type='checkbox']";
    this.proceedToCheckoutBtn = ".cart_navigation button";
  }

  public clickAcceptTerms(): void {
    cy.get(this.acceptTerms).click();
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}

export {ShippingStepPage};
