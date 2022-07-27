import menuContentPage from "../page/menu-content.page";
import productListPage from "../page/products-list.page";
import shoppingCartPage from "../page/shoping-cart.page";
import loginPage from "../page/login.page";
import addressStepPage from "../page/address-step.page";
import shippingStepPage from "../page/shipping-step.page";
import paymentStepPage from "../page/payment-step.page";

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productListPage.clickAddToCartBtn();
    productListPage.clickProceedToCheckout();

    shoppingCartPage.clickProceedToCheckout();

    loginPage.typeEmailInput();
    loginPage.typePasswordInput();
    loginPage.clickSignInBtn();

    addressStepPage.clickProceedToCheckout();

    shippingStepPage.clickCheckBox();
    shippingStepPage.clickProceedToCheckout();

    paymentStepPage.clickPayByBankWireBtn();
    paymentStepPage.clickProceedToCheckout();

    cy.get(paymentStepPage.confirmationMessage).should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
