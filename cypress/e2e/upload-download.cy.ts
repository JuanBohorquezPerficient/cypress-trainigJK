import {Upload} from "../page/index";

const upload: Upload = new Upload();

describe("Upload and download a file", ()=>{
  let txt: {targetFile: string};
  before(()=>{
    cy.fixture("upload").then((texto)=>{
      txt = texto;
    });
  });

  it("Should upload a file", ()=>{
    upload.visitTestPage();
    upload.uploadFile(txt.targetFile);

    upload.getTitle(txt.targetFile);
  });
});
