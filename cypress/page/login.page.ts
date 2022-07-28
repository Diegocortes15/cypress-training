class LoginPage {
  private emailInput: string;
  private passwordInput: string;
  private SignInBtn: string;

  constructor() {
    this.emailInput = "#email";
    this.passwordInput = "#passwd";
    this.SignInBtn = "[name='SubmitLogin']";
  }

  public login(email: string, password: string): void {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.SignInBtn).click();
  }
}

export {LoginPage};
