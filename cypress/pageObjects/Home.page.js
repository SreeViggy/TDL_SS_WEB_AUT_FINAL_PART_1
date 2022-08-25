import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }


  static get listOfItems() {
    return cy.get(`.inventory_item`);
  }

  static get filterOption() {
    return cy.get(`.product_sort_container`);
  }

  static  itemName(x=1){
    return cy.get(`.inventory_item:nth-child(${x}).inventory_item_name`);
  }

  static  itemPrice(x) {
    return cy.get(`.inventory_item:nth-child(${x}) .inventory_item_price`);
  }

  static  nameOfTheItem(name) {
    return cy.get(`.inventory_item_name`).contains(name);
  }

  static get stackBurgerIcon() {
    return cy.get(`#react-burger-menu-btn`);
  }

  static get resetButton() {
    return cy.get(`#reset_sidebar_link`);
  }


}

export default HomePage;
