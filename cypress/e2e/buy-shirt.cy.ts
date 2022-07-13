import {AddressStepPage, MenuContentPage, ProducsList,
  ShippingStepPage, ShoppingCart, PaymentStepPage, LoginPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProducsList();
const shoppingCartPage = new ShoppingCart();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  const email = "aperdomobo@gmail.com";
  const psw = "WorkshopProtractor";
  const expectedMessage = "Your order on My Store is complete.";

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.clickAddToCartBtn();
    shoppingCartPage.clickProceedBtn();
    shoppingCartPage.clickSecondCheckout();
    loginPage.login(email, psw);
    loginPage.clickSubmitBtn();
    // // Debes completar la prueba ...
    addressStepPage.clickAddressCheck();
    shippingStepPage.clickAgreement();
    shippingStepPage.clickShippingCheckout();
    paymentStepPage.clickPayment();
    paymentStepPage.clickConfirmOrderBtn();
    paymentStepPage.getParagraph().should("have.text", expectedMessage);
  });
});
