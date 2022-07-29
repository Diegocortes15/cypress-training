class PaymentStepPage {
  private payByBankWireBtn: string;
  private proceedToCheckoutBtn: string;
  private confirmationMessage: string;

  constructor() {
    this.payByBankWireBtn = "[title='Pay by bank wire']";
    this.proceedToCheckoutBtn = ".cart_navigation button";
    this.confirmationMessage = "#center_column > div > p > strong";
  }

  public clickPayByBankWireBtn(): void {
    cy.get(this.payByBankWireBtn).click();
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }

  public getConfirmationMessage(): any {
    return cy.get(this.confirmationMessage);
  }
}

export {PaymentStepPage};
