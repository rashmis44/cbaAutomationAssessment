const { Given, Then, When, And } = require('cucumber');
const RepaymentsCalculatorPage = require('../pages/repaymentsCalculatorPage');
const repaymentsCalculatorPage = new RepaymentsCalculatorPage();

When(/^I should be displayed with Home loan repayments calculator page$/, () => {
    repaymentsCalculatorPage.verifyHomeRepaymentsCalulatorHeader();
    repaymentsCalculatorPage.verifyRepaymentCalulatorLink();
});

When(/^I provide loan amount details such as (.*), (.*), (.*), (.*)$/, (amtToBorrow,timeperiod,repaymentType,interestType) => {
    repaymentsCalculatorPage.enterAmountToBorrow(amtToBorrow);
    repaymentsCalculatorPage.enterTimePeriodToRepay(timeperiod);
    repaymentsCalculatorPage.selectRepaymentType(repaymentType);
    repaymentsCalculatorPage.selectInterestType(interestType,repaymentType);
});

When(/^I click on Calculate button$/, () => {
    repaymentsCalculatorPage.clickCalculate();
 });

 When(/^I should be displayed with (.*) and (.*) values$/, (totalHomeLoan,totalInterestCharged) => {
    repaymentsCalculatorPage.verifyTotalLoanRepaymentsValue();
    repaymentsCalculatorPage.verifyTotalInterestChargedValue();
    repaymentsCalculatorPage.validateTotalLoanRepaymentsValue(totalHomeLoan);
    repaymentsCalculatorPage.validateTotalInterestChargedValue(totalInterestCharged);
});