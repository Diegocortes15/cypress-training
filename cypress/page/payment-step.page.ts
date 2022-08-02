class PaymentStepPage {
  private payByBankWireBtn: string;
  private confirmOrderBtn: string;
  private confirmationMessage: string;

  constructor() {
    this.payByBankWireBtn = ".bankwire";
    this.confirmOrderBtn = ".cart_navigation .button";
    this.confirmationMessage = ".cheque-indent .dark";
  }

  public clickPayByBankWireBtn(): void {
    cy.get(this.payByBankWireBtn).click();
  }

  public clickConfirmOrderBtn(): void {
    cy.get(this.confirmOrderBtn).click();
  }

  public getConfirmationMessage(): any {
    return cy.get(this.confirmationMessage);
  }
}

export {PaymentStepPage};
