export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Onesie'
    link_invalid = 'Tomato Sauce'
    btn_chart = '#add-to-cart-sauce-labs-onesie'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Onesie').should('be.visible') 
    }

    AddtoChart(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Onesie').should('be.visible') 
        cy.get(this.btn_chart).click()
    }

}