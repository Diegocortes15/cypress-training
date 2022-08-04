import {
  MenuContentPage,
  ProductsListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
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
