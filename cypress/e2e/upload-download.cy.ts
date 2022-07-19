import {Upload} from "../page/index";

let upload: Upload;

describe("Upload and download a file", ()=>{
  before(()=>{
    upload = new Upload();
  });

  it("Should upload a file", ()=>{
    const targetFile = "example.json";

    upload.visitTestPage();
    upload.uploadFile(targetFile);

    upload.getTitle().should("contain.text", targetFile);
  });
});
