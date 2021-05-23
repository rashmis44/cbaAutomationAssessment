const cbaObjRepo = require('../ObjectRepo/RepaymentsCalculatorPageObjectRepositry');
const assert = require("assert");
const { Console } = require('console');

class repaymentsCalculatorPage {

    verifyHomeRepaymentsCalulatorHeader () {
        const myElem = $(cbaObjRepo.Home_Loan_Repayments_Calculator_Header);
        myElem.isExisting();
        myElem.isDisplayed();
    };

    verifyRepaymentCalulatorLink () {
        const myElem = $(cbaObjRepo.Repayments_Calculator_Link);
        myElem.isExisting();
        myElem.isDisplayed();
    };

    enterAmountToBorrow (amount) {
        const myElem = $(cbaObjRepo.I_Would_Like_To_Borrow_Input);
        myElem.isExisting();
        myElem.setValue(amount);
    }

    enterTimePeriodToRepay (time) {
        const myElem = $(cbaObjRepo.Over_Years_Input);
        myElem.isExisting();
        myElem.setValue(time);
    }

    selectRepaymentType (repaymentType) {
        const myElem = $(cbaObjRepo.Repayment_Type_Select);
        myElem.isExisting();
        myElem.click();
        myElem.selectByVisibleText(repaymentType);
    }

    selectInterestType (interestType,repaymentType) {
        const myElem = $(cbaObjRepo.Interest_Type_Select);
        myElem.isExisting();
        myElem.click();
            myElem.selectByVisibleText(interestType);
    }

    clickCalculate () {
        const myElem = $(cbaObjRepo.Calculate_Button);
        myElem.click()
    };

    verifyTotalLoanRepaymentsValue () {
        const myElem = $(cbaObjRepo.Total_Loan_Repayments_Span);
        myElem.isExisting();
        myElem.isDisplayed();
    }

    verifyTotalInterestChargedValue () {
        const myElem = $(cbaObjRepo.Total_Interest_Charged_Span);
        myElem.isExisting();
        myElem.isDisplayed();
    }

    validateTotalLoanRepaymentsValue (totalHomeLoan){
        const myElem = $(cbaObjRepo.Total_Loan_Repayments_Span);
        myElem.isExisting();
        myElem.isDisplayed();
        console.log("total repayment value  : " +myElem.getText()) ;
        expect(myElem).toHaveText(totalHomeLoan);
    }

    validateTotalInterestChargedValue (totalInterestCharged) {
        const myElem = $(cbaObjRepo.Total_Interest_Charged_Span);
        myElem.isExisting();
        myElem.isDisplayed();
        console.log("element text   " + myElem.getText());
        expect(myElem).toHaveText(totalInterestCharged);
    }

}
module.exports = repaymentsCalculatorPage;