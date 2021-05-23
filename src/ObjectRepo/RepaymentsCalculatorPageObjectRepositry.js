const cbaObjRepo = {
    Home_Loan_Repayments_Calculator_Header: "//h1[contains(text(),'Home loan repayments calculator')]",
    Repayments_Calculator_Link: "//a[@id='repayments-link']",
    I_Would_Like_To_Borrow_Input: "//input[@id='amount']",
    Over_Years_Input: "//input[@id='term']",
    Repayment_Type_Select: "//select[@id='interestOnly']",
    Interest_Type_Select: "//select[@id='productId']",
    Calculate_Button: "//button[@id='submit']",
    Total_Loan_Repayments_Span: "//span[@data-tid='total-repayment']",
    Total_Interest_Charged_Span: "//span[@data-tid='total-interest']"
};

module.exports = cbaObjRepo;