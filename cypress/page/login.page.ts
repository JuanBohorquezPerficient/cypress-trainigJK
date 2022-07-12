class LoginPage{
    private email: string;
    private psw: string;
    private submitBtn: string;

    constructor(){
        this.email = "aperdomobo@gmail.com",
        this.psw = "WorkshopProtractor",
        this.submitBtn = "#SubmitLogin > span"
    }

    public enterCredentials(): void{
        cy.get("#email").type(this.email);
        cy.get("#passwd").type(this.psw);
    }

    public clickSubmitBtn(): void{
        cy.get(this.submitBtn).click();
    }
}

export {LoginPage}
