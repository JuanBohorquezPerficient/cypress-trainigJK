class Upload{
    private testUrl: string;
    private titleContent: string;
    private fileContainer: string;
    
    constructor(){
        this.testUrl = "http://demo.automationtesting.in/FileUpload.html";
        this.titleContent = ".file-footer-caption";
        this.fileContainer = "#input-4";
    }

    public visitTestPage(){
        cy.visit(this.testUrl);
    }

    public uploadFile(targetFile: string): void{
        cy.get(this.fileContainer).attachFile(targetFile);
    }

    public getTitle(){
        return cy.get(this.titleContent);
    }
}

export {Upload}
