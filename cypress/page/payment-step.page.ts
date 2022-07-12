class PaymentStepPage{
    private wireBankBtn: string;
    private confirmOrderBtn: string;
    private expectedParagraph: string;
    private paragraphContainer: string;

    constructor(){
        this.wireBankBtn = ".bankwire",
        this.confirmOrderBtn = "#cart_navigation > .button > span",
        this.expectedParagraph = "Your order on My Store is complete.",
        this.paragraphContainer = "#center_column > div > p > strong"
    }

    public clickPayment(): void{
        cy.get(this.wireBankBtn).click();
    }
    
    public clickConfirmOrderBtn(): void{
        cy.get(this.confirmOrderBtn).click();
    }

    public assertParagraph(): void{
        cy.get(this.paragraphContainer).should("have.text", this.expectedParagraph)
    }
}

export {PaymentStepPage}
