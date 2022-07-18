
interface personalInfo {
    name: string,
    lastName: string,
    email: string,
    gender: string,
    mobileNumber: string,
    hobbies: string[],
    currentAddress: string
}


const persona1 = {
    name: "Holmes",
    lastName: "Salazar",
    email: "hibarras@email.com",
    gender: "Male",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
}

export {personalInfo, persona1}

