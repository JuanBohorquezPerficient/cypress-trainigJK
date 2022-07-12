
import {AddressStepPage, MenuContentPage} from "../page/index";
import {ProducsList, ShippingStepPage} from "../page/index";
import { ShoppingCart, PaymentStepPage } from "../page/index";
import { LoginPage } from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProducsList();
const shoppingCartPage = new ShoppingCart();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.clickAddToCartBtn();
    shoppingCartPage.clickProceedBtn();
    shoppingCartPage.clickSecondCheckout();
    loginPage.enterCredentials();
    loginPage.clickSubmitBtn();
    // // Debes completar la prueba ...
    addressStepPage.clickAddressCheck();
    shippingStepPage.clickAgreement();
    shippingStepPage.clickShippingCheckout();
    paymentStepPage.clickPayment();
    paymentStepPage.clickConfirmOrderBtn();
    paymentStepPage.assertParagraph();

  });
});
