class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string;
  private dressesMenu: string;

  constructor() {
    this.menuContentPageURL = "http://automationpractice.com/";
    this.tShirtMenu = ".menu-content > li > a[title='T-shirts']";
    this.dressesMenu = ".menu-content > li > a[title='Dresses']";
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }

  public goToDressesMenu(): void {
    cy.get(this.dressesMenu).click();
  }
}

export {MenuContentPage};
