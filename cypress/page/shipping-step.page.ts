class ShippingStepPage {
  private acceptTerms: string;
  private proceedToCheckoutBtn: string;

  constructor() {
    this.acceptTerms = ".checker input";
    this.proceedToCheckoutBtn = ".cart_navigation .button";
  }

  public clickAcceptTerms(): void {
    cy.get(this.acceptTerms).click();
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}

export {ShippingStepPage};
