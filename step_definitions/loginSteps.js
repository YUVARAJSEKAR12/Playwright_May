const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');


Given('I launch the application', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.launchApplication();
});


When('Enter the username {string}', async function (username) {
    await this.loginPage.login_user(username);
});

When('Enter the password {string}', async function (password) {
    await this.loginPage.login_pass(password);
});

When('Enter the details for the form', async function (dataTable) {
    const data = await dataTable.raw();
    //console.log(data);
    const username = data[1][0];
    const password = data[1][1];
    console.log(username, password);
});

When('Enter the details for the form rowhash', async function (dataTable) {
    const data =await dataTable.rowsHash();
    console.log(data.username);
    console.log(data.password);
});
