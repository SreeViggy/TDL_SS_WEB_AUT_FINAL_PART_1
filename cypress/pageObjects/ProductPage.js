import BasePage from "./Base.page";

class ProductPage extends BasePage {

    static get addToCart() {
        return cy.get(`.btn_inventory`).contains("Add to cart");
    }
    static get shoppingCartcount() {
        return cy.get(`.shopping_cart_badge`);
    }
    static get backToProducts() {
        return cy.get(`#back-to-products`);
    }
    static get removeItem() {
        return cy.get(`.btn_inventory`).contains("Remove");
    }
    static get shoppingCart() {
        return cy.get(`.shopping_cart_link`);
    }
}

export default ProductPage;

