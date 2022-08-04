import {
  MenuContentPage,
  ProductsListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    let menuContentPage: MenuContentPage;
    let productsListPage: ProductsListPage;
    let shoppingCartPage: ShoppingCartPage;
    let loginPage: LoginPage;
    let addressStepPage: AddressStepPage;
    let shippingStepPage: ShippingStepPage;
    let paymentStepPage: PaymentStepPage;

    const loginData = {
      email: "aperdomobo@gmail.com",
      password: "WorkshopProtractor",
    };

    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.clickAddToCartBtn();
    productsListPage.clickProceedToCheckout();

    shoppingCartPage.clickProceedToCheckout();

    loginPage.login(loginData.email, loginData.password);

    addressStepPage.clickProceedToCheckout();

    shippingStepPage.clickAcceptTerms();
    shippingStepPage.clickProceedToCheckout();

    paymentStepPage.clickPayByBankWireBtn();
    paymentStepPage.clickConfirmOrderBtn();
    paymentStepPage
      .getConfirmationMessage()
      .should("have.text", "Your order on My Store is complete.");
  });
});
