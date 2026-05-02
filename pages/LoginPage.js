const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login');
       
    }

    async launchApplication() {
        await this.openUrl(process.env.BASE_URL);
    }

    async login(username, password) {
        await this.enterText(this.usernameInput, username);
        await this.enterText(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }

    async login_user(username){
        await this.enterText(this.usernameInput, username);
    }

     async login_pass(password){
        await this.enterText(this.passwordInput, password);
    }

    async login_button(){
        await this.clickElement(this.loginButton)
    }

    // async verifyDashboard() {
    //     await this.dashboardText.waitFor({ state: 'visible' });
    // }
}

module.exports = LoginPage;