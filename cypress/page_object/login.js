

class LoginPage {
    get email (){
        return cy.get ("input[type='email']");
    }
    get password (){
        return cy.get("input[type='password']")
    }
    get submitBtn (){
        return cy.get ("button[type='submit']")
    }

    get mainHeader (){
        return cy.get('h1')
    }

    get errorMessage (){
        return cy.get("span[class='el-form-item__error']")
    }
get emptyInput (){
    return cy.contains('he email field must be a valid email') 
}
    loginInfo (userEmail, userPassword) {
        this.email.type(userEmail);
        this.password.type(userPassword);
        this.submitBtn.click()
    }
}

export const loginPage = new LoginPage