import {PersonalFormPage} from "../page/personal-form.page";
import {FormAssertions} from "../e2e/questions/form-assertions.page";

describe("fill and submit a form", ()=>{
  let personalFormPage: PersonalFormPage;
  let formAssertionsObj: FormAssertions;
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
    formAssertionsObj = new FormAssertions();
  });

  it("Then it should fill the form", ()=>{
    personalFormPage.enterToTargetUrl();
    personalFormPage.fillForm(personalInformation); // tasks method

    formAssertionsObj.assertPageOutput(); // Questions or assertions
  });
});
