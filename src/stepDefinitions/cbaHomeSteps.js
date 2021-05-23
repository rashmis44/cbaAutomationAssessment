const { Given, Then, When, And } = require('cucumber');
const CbaHomePage = require('../pages/cbaHomePage');
//const { enterUserName} = require('../pages/loginPage');
const cbaHomePage = new CbaHomePage();

When(/^I click on Repayments calculator$/, () => {
   cbaHomePage.clickRepaymentsCalculator();
});