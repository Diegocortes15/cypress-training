class PaymentStepPage {
  private payByBankWireBtn: string;
  private proceedToCheckoutBtn: string;
  private confirmationMessage_: string;

  constructor() {
    this.payByBankWireBtn = "[title='Pay by bank wire']";
    this.proceedToCheckoutBtn = ".cart_navigation button";
    this.confirmationMessage_ = "#center_column > div > p > strong";
  }

  public clickPayByBankWireBtn(): void {
    cy.get(this.payByBankWireBtn).click();
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }

  public get confirmationMessage(): string {
    return this.confirmationMessage_;
  }
}

export {PaymentStepPage};
