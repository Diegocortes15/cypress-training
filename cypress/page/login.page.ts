class LoginPage {
  private emailInput: string;
  private passwordInput: string;
  private SignInBtn: string;

  constructor() {
    this.emailInput = "#email";
    this.passwordInput = "#passwd";
    this.SignInBtn = "[name='SubmitLogin']";
  }

  public typeEmailInput(): void {
    cy.get(this.emailInput).type("aperdomobo@gmail.com");
  }

  public typePasswordInput(): void {
    cy.get(this.passwordInput).type("WorkshopProtractor");
  }

  public clickSignInBtn(): void {
    cy.get(this.SignInBtn).click();
  }
}

export default new LoginPage();
