import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get loginContainer(){
        return $('.login-container');
    }

    public get emailInput(){
        return $('input[type="email"]');
    }

    public get passwordInput(){
        return $('input[type="password"]');
    }

    public get loginBtn(){
        return $('#sign-in');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async assertLoginPageIsVisible(){
        await (await this.loginContainer).waitForDisplayed();
    }

    public async logIn(userEmail : string, userPassword : string){
        await (await this.emailInput).setValue(userEmail);
        await (await this.passwordInput).setValue(userPassword);
        await (await this.loginBtn).click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
