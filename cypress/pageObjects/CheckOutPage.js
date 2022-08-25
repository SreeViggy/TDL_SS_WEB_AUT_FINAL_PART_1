
import BasePage from "./Base.page";

class CheckoutPage extends BasePage {
    static get firstName() {
        return cy.get(`#first-name`);
    }
    static get lastName() {
        return cy.get(`#last-name`);
    }
    static get postalCode() {
        return cy.get(`#postal-code`);
    }
    static get continue() {
        return cy.get(`#continue`);
    }

    static get checkout() {
        return cy.get(`#checkout`);
    }

    static get product() {
        return cy.get(`.cart_list`);
    }
    static get finish() {
        return cy.get(`#finish`);
    }

    static get message() {
        return cy.get(`.complete-header`);
    }
}

export default CheckoutPage;