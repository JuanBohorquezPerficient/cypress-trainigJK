class IframePage{
    visit(){
        cy.visit("https://www.w3schools.com/html/html_iframe.asp");
      }
      
      getFrameTitle(){
        // get the title of the page in the iframe
      }
      
      goToCssPageInFrame(){
        // navigate to the css page in the iframe
      }
}

export {IframePage}
