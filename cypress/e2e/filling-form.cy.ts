import {PersonalFormPage} from "../page/personal-form.page";

describe("fill and submit a form", ()=>{
  let personalFormPage: PersonalFormPage;
  const city = "NCR Delhi";
  const personalInformation = {
    name: "Holmes",
    lastName: "Salazar",
    email: "hibarras@email.com",
    gender: "Male",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
  };
  before(()=>{
    personalFormPage = new PersonalFormPage();
  });

  it("Then it should fill the form", ()=>{
    personalFormPage.enterToTargetUrl();
    personalFormPage.fillForm(personalInformation); // tasks method

    cy.get(".modal-body") // Questions or Assertions module
        .should("contain.text", `${personalInformation.name} ${personalInformation.lastName}`)
        .should("contain.text", personalInformation.email)
        .should("contain.text", personalInformation.gender)
        .should("contain.text", personalInformation.mobileNumber)
        .should("contain.text", "Reading, Music")
        .should("contain.text", personalInformation.currentAddress)
        .should("contain.text", city);
  });
});
