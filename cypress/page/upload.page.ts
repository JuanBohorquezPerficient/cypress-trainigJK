class Upload{
    private testUrl: string;
    private fileContainer: string;
    private submitBtn: string;
    private messageCont: string;
    private message: string;
    
    constructor(){
        this.testUrl = "https://the-internet.herokuapp.com/upload";
        this.fileContainer = "#file-upload";
        this.submitBtn = "#file-submit";
        this.messageCont = "#uploaded-files";
        this.message = "textForTest.txt";
    }

    public visitTestPage(){
        cy.visit(this.testUrl);
    }

    public uploadFile(targetFile: string): void{
        cy.get(this.fileContainer).attachFile(targetFile);
        cy.get(this.submitBtn).click({force:true})
    }

    public getTitle(txtTitle:string): Cypress.Chainable{
        return cy.get(this.messageCont).each((item, index) => {
            expect(item.text().trim()).to.contain(this.message)
          });
    }
    
}

export {Upload}
