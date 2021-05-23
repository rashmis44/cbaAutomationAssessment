const cbaObjRepo = require('./../ObjectRepo/CbaHomePageObjectRepository');

class CbaHomePage {
       
    clickRepaymentsCalculator () {
        const myElem = $(cbaObjRepo.Repayments_Calculator_Link);
        myElem.click()
    };


}
module.exports = CbaHomePage;