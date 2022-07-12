class ProducsList{
    private addToCartBtn: string;

    constructor(){
        this.addToCartBtn = ".ajax_add_to_cart_button > span"
    }

    public clickAddToCartBtn(): void {
        cy.get(this.addToCartBtn).click();
    }
}

export {ProducsList}
