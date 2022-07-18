class FormAssertions {
  city = "NCR Delhi";

  constructor() {

  }
  personalInformation = {
    name: "Holmes",
    lastName: "Salazar",
    email: "hibarras@email.com",
    gender: "Male",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
  };

  public assertPageOutput() {
    cy.get(".modal-body") // Questions or Assertions module
        .should("contain.text", `${this.personalInformation.name} ${this.personalInformation.lastName}`)
        .should("contain.text", this.personalInformation.email)
        .should("contain.text", this.personalInformation.gender)
        .should("contain.text", this.personalInformation.mobileNumber)
        .should("contain.text", "Reading, Music")
        .should("contain.text", this.personalInformation.currentAddress)
        .should("contain.text", this.city);
  }
}

export {FormAssertions};
