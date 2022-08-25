import CheckoutPage from "../pageObjects/CheckOutPage";
import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import ProductPage from "../pageObjects/ProductPage";


describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Scenario 1 Login with locked_out_user", () => {
      LoginPage.loginUser.type("locked_out_user");
      LoginPage.enterPassword.type("secret_sauce");
      LoginPage.loginButton.click();
      LoginPage.errorMsg.should("contains.text",'Epic sadface: Sorry, this user has been locked out.');
  });

  it("Scenario 2 Login with wrong password", () => {
    LoginPage.loginUser.type("standard_user");
    LoginPage.enterPassword.type("secret_sauce1");
    LoginPage.loginButton.click();
    LoginPage.errorMsg.should("contains.text",'Epic sadface: Username and password do not match any user in this service');
});

context("Log In Activity", () => {
  beforeEach(()=> {
    LoginPage.loginUser.type("standard_user");
    LoginPage.enterPassword.type("secret_sauce");
    LoginPage.loginButton.click();
  })
 
    it("Scenario 3 item amount Validation", () => {
      HomePage.listOfItems.should("have.length", 6);
    });


  it("Scenario 4 Sort items - Price high to low", () => {
    HomePage.filterOption.select("Price (high to low)");
    HomePage.itemName(1).should("have.text", "Sauce Labs Fleece Jacket");
    HomePage.itemPrice(1).should("have.text", "$49.99");

    })


  it("Scenario 5 Price low to High", () => {
      HomePage.filterOption.select("Price (low to high)");
      HomePage.itemName(1).should("have.text", "Sauce Labs Onesie");
      HomePage.itemPrice(1).should("have.text", "$7.99");
});

  it("Scenario 6 Name (Z to A)", () => {
      HomePage.filterOption.select("Name (Z to A)");
      HomePage.itemName(1).should("have.text", "Test.allTheThings() T-Shirt (Red)");

});

it("Scenario 7 Validate shopping cart badge amount", () => {
  HomePage.nameOfTheItem("Sauce Labs Bolt T-Shirt").click();
  ProductPage.addToCart.click();
  ProductPage.shoppingCartcount.should("have.text", 1);
  ProductPage.backToProducts.click();
  HomePage.nameOfTheItem("Sauce Labs Bike Light").click();
  ProductPage.addToCart.click();
  ProductPage.shoppingCartcount.should("have.text", 2);
});

it("Scenario 8 Reset App State", () => {
  HomePage.nameOfTheItem("Sauce Labs Bolt T-Shirt").click();
  ProductPage.addToCart.click();
  ProductPage.backToProducts.click();
  ProductPage.shoppingCartcount.should("have.text", 1);
  HomePage.stackBurgerIcon.click();
  HomePage.resetButton.click();
  ProductPage.shoppingCartcount.should("not.exist");
})
it("Scenario 9 Validate shopping cart remove button functionality", () => {
  HomePage.nameOfTheItem("Sauce Labs Bolt T-Shirt").click();
  ProductPage.addToCart.click();
  ProductPage.shoppingCartcount.should("have.text", 1);
  ProductPage.removeItem.click();
  ProductPage.shoppingCartcount.should("not.exist");

})

it("Scenario 10 Buy a T-shirt", () => {
  HomePage.nameOfTheItem("Test.allTheThings() T-Shirt (Red)").click();
  ProductPage.addToCart.click();
  ProductPage.shoppingCart.click();
  CheckoutPage.checkout.click();
  CheckoutPage.firstName.type("Vignesh");
  CheckoutPage.lastName.type("Krishnan");
  CheckoutPage.postalCode.type("XX-1234");
  CheckoutPage.continue.click();
  CheckoutPage.product.should("contain.text", "Test.allTheThings() T-Shirt (Red)");
  CheckoutPage.finish.click();
  CheckoutPage.message.should("have.text", "THANK YOU FOR YOUR ORDER");
})
})
})
