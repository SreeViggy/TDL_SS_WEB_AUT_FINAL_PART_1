import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get loginUser() {
    return cy.get("#user-name");
  }

  static get enterPassword(){
    return cy.get("#password");
  }

  static get loginButton(){
    return cy.get("#login-button");
  }

  static get errorMsg(){
    return cy.get(`[data-test="error"]`);
  }


  static get redTshirtAddToCart(){
    return cy.get("#add-to-cart-sauce-labs-onesie");
  }

  static get cartQty(){
    return cy.get("[class='shopping_cart_badge']");
  }

  static get backToProducts(){
    return cy.get("#continue-shopping");
  }

  static get labsBikeLight(){
    return cy.get("#item_0_title_link");
  }

  static get labsBikeLightToCart(){
    return cy.get("#add-to-cart-sauce-labs-bike-light");

  }

  static 
  

}

export default LoginPage;
