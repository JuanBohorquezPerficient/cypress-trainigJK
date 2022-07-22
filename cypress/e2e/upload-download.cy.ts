import {Upload} from "../page/index";

const upload: Upload = new Upload();

describe("Upload and download a file", ()=>{
  const targetFile = "textForTest.txt";
  const expectedText = "textForTest";
  before(()=>{
    cy.fixture("upload");
  });

  it("Should upload a file", ()=>{
    upload.visitTestPage();
    upload.uploadFile(targetFile);
    upload.getTitle().should("contain.text", expectedText);
  });
});
