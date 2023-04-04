
import { loginPage } from "../page_object/login";
const userInfo = require("../fixtures/userInfo.json")
//import { faker } from "@faker-js/faker"

describe("Successfull login", () => {
    it("successfull login", () => {
        cy.visit("/login");
    loginPage.loginInfo(userInfo.userEmail, userInfo.userPassword)
    
})
it.only("try to login with incorrect email", () => {
    cy.visit("/login");
    loginPage.email.clear
    loginPage.email.should('be.empty')
    loginPage.password.type(userInfo.userPassword)
    loginPage.password.should("be.visible")
    loginPage.submitBtn.click()
    loginPage.emptyInput.should('have.text', 'The email field must be a valid email')
    
})
it ("try to login with incorrect password", () => {
    cy.visit("/login");
    loginPage.email.type(userInfo.userEmail)
    loginPage.email.should("be.visible")
    loginPage.password.type("Nevim.10")
    loginPage.password.should("be.visible")
    loginPage.submitBtn.click()
    loginPage.errorMessage.should('have.text','Oops! Your email/password combination is incorrect')
})

})